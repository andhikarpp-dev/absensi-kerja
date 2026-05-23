import { Component, inject, signal, OnInit, OnDestroy, computed, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AbsensiService } from '../../../core/services/absensi.service';
import { AuthService } from '../../../core/services/auth.service';
import { Absensi } from '../../../core/models/absensi.model';
import { LayoutComponent } from '../../../shared/layout/layout.component';

@Component({
  selector: 'app-check-in-out',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent],
  templateUrl: './check-in-out.component.html'
})
export class CheckInOutComponent implements OnInit, OnDestroy {
  private svc = inject(AbsensiService);
  auth        = inject(AuthService);

  // ── ViewChild kamera ──────────────────────────────────────
  @ViewChild('videoEl')  videoEl!:  ElementRef<HTMLVideoElement>;
  @ViewChild('canvasEl') canvasEl!: ElementRef<HTMLCanvasElement>;

  // ── State utama ───────────────────────────────────────────
  hariIni        = signal<Absensi | null>(null);
  riwayat        = signal<Absensi[]>([]);
  loading        = signal(true);
  loadingRiwayat = signal(false);
  saving         = signal(false);
  error          = signal('');
  successMsg     = signal('');

  // ── Form ──────────────────────────────────────────────────
  catatanCheckIn  = '';
  catatanCheckOut = '';
  fotoFile: File | null      = null;
  fotoPreview: string | null = null;

  // ── Lokasi GPS ────────────────────────────────────────────
  lokasiLat:    number | null = null;
  lokasiLng:    number | null = null;
  lokasiStatus: 'idle' | 'loading' | 'ok' | 'error' = 'idle';
  lokasiError   = '';

  // ── Mode foto: 'idle' | 'camera' | 'preview' ─────────────
  fotoMode: 'idle' | 'camera' | 'preview' = 'idle';
  private stream: MediaStream | null = null;
  kameraError  = '';
  facingMode: 'user' | 'environment' = 'user';

  // ── Filter riwayat ────────────────────────────────────────
  filterBulan = new Date().getMonth() + 1;
  filterTahun = new Date().getFullYear();

  listBulan = [
    { val: 1,  label: 'Januari'   }, { val: 2,  label: 'Februari' },
    { val: 3,  label: 'Maret'     }, { val: 4,  label: 'April'    },
    { val: 5,  label: 'Mei'       }, { val: 6,  label: 'Juni'     },
    { val: 7,  label: 'Juli'      }, { val: 8,  label: 'Agustus'  },
    { val: 9,  label: 'September' }, { val: 10, label: 'Oktober'  },
    { val: 11, label: 'November'  }, { val: 12, label: 'Desember' },
  ];
  listTahun = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - i);

  // ── Jam live ──────────────────────────────────────────────
  jamSekarang = signal(this.formatJam(new Date()));
  private clockInterval: any;

  // ── Computed ──────────────────────────────────────────────
  readonly sudahCheckIn  = computed(() => this.hariIni()?.sudahCheckIn  ?? false);
  readonly sudahCheckOut = computed(() => this.hariIni()?.sudahCheckOut ?? false);

  // ══════════════════════════════════════════════════════════
  ngOnInit(): void {
    this.loadHariIni();
    this.loadRiwayat();
    this.clockInterval = setInterval(() =>
      this.jamSekarang.set(this.formatJam(new Date())), 1000);
    // Auto-ambil lokasi sejak awal agar siap saat simpan
    this.dapatkanLokasi();
  }

  ngOnDestroy(): void {
    clearInterval(this.clockInterval);
    this.stopStream();
  }

  // ── Kamera ────────────────────────────────────────────────
  async bukaKamera(): Promise<void> {
    this.kameraError = '';
    this.fotoMode    = 'camera';
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: this.facingMode, width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false
      });
      setTimeout(() => {
        if (this.videoEl?.nativeElement) {
          this.videoEl.nativeElement.srcObject = this.stream;
          this.videoEl.nativeElement.play();
        }
      }, 100);
    } catch (err: any) {
      this.kameraError = err?.name === 'NotAllowedError'
        ? 'Izin kamera ditolak. Silakan izinkan akses kamera di browser.'
        : 'Kamera tidak tersedia di perangkat ini.';
      this.fotoMode = 'idle';
    }
  }

  async flipKamera(): Promise<void> {
    this.stopStream();
    this.facingMode = this.facingMode === 'user' ? 'environment' : 'user';
    await this.bukaKamera();
  }

  ambilFoto(): void {
    const video  = this.videoEl?.nativeElement;
    const canvas = this.canvasEl?.nativeElement;
    if (!video || !canvas) return;

    canvas.width  = video.videoWidth  || 640;
    canvas.height = video.videoHeight || 480;
    const ctx = canvas.getContext('2d')!;

    // Mirror untuk kamera depan
    if (this.facingMode === 'user') {
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
    }
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    this.fotoPreview = canvas.toDataURL('image/jpeg', 0.85);
    this.stopStream();
    this.fotoMode = 'preview';

    canvas.toBlob(blob => {
      if (blob) {
        this.fotoFile = new File([blob], `selfie-${Date.now()}.jpg`, { type: 'image/jpeg' });
      }
    }, 'image/jpeg', 0.85);

    // Otomatis ambil lokasi GPS setelah foto diambil
    this.dapatkanLokasi();
  }

  ulangiKamera(): void {
    this.stopStream();
    this.fotoFile    = null;
    this.fotoPreview = null;
    this.fotoMode    = 'idle';
    this.lokasiLat   = null;
    this.lokasiLng   = null;
    this.lokasiStatus = 'idle';
    this.lokasiError  = '';
  }

  // ── Lokasi GPS ────────────────────────────────────────────
  dapatkanLokasi(): void {
    if (!navigator.geolocation) {
      this.lokasiStatus = 'error';
      this.lokasiError  = 'Browser tidak mendukung GPS.';
      return;
    }
    this.lokasiStatus = 'loading';
    this.lokasiError  = '';
    navigator.geolocation.getCurrentPosition(
      pos => {
        this.lokasiLat    = pos.coords.latitude;
        this.lokasiLng    = pos.coords.longitude;
        this.lokasiStatus = 'ok';
      },
      err => {
        this.lokasiStatus = 'error';
        this.lokasiError  = err.code === 1
          ? 'Izin lokasi ditolak. Aktifkan GPS di browser.'
          : 'Gagal mendapatkan lokasi.';
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  }

  get lokasiMapsUrl(): string | null {
    if (this.lokasiLat == null || this.lokasiLng == null) return null;
    return `https://www.google.com/maps?q=${this.lokasiLat},${this.lokasiLng}`;
  }

  private stopStream(): void {
    this.stream?.getTracks().forEach(t => t.stop());
    this.stream = null;
  }

  // ── Galeri ────────────────────────────────────────────────
  bukaGaleri(): void {
    document.getElementById('inputFotoMasuk')?.click();
  }

  onFotoChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.fotoFile = input.files[0];
      const reader  = new FileReader();
      reader.onload = e => {
        this.fotoPreview = e.target?.result as string;
        this.fotoMode    = 'preview';
      };
      reader.readAsDataURL(this.fotoFile);
      // Otomatis ambil lokasi GPS saat foto dipilih dari galeri
      this.dapatkanLokasi();
    }
  }

  removeFoto(): void {
    this.fotoFile     = null;
    this.fotoPreview  = null;
    this.fotoMode     = 'idle';
    this.lokasiLat    = null;
    this.lokasiLng    = null;
    this.lokasiStatus = 'idle';
    this.lokasiError  = '';
  }

  // ── Format helpers ────────────────────────────────────────
  private formatJam(d: Date): string {
    return d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }

  formatTime(t?: string): string {
    if (!t) return '—';
    return t.substring(0, 5);
  }

  formatTanggal(t?: string): string {
    if (!t) return '—';
    return new Date(t).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
  }

  namaBulanDari(val: number): string {
    return this.listBulan.find(b => b.val === val)?.label ?? '';
  }

  hariLabel(h: string): string {
    const map: Record<string, string> = {
      SENIN: 'Senin', SELASA: 'Selasa', RABU: 'Rabu', KAMIS: 'Kamis',
      JUMAT: 'Jumat', SABTU: 'Sabtu', MINGGU: 'Minggu'
    };
    return map[h] ?? h;
  }

  statusClass(s: string): string {
    return s === 'HADIR' ? 'success' : s === 'IZIN' ? 'info' :
           s === 'SAKIT' ? 'warning' : 'danger';
  }

  terlambatLabel(menit: number): string {
    if (!menit || menit <= 0) return '';
    if (menit < 60) return `${menit} menit`;
    const j = Math.floor(menit / 60), m = menit % 60;
    return m > 0 ? `${j} jam ${m} mnt` : `${j} jam`;
  }

  // ── Load data ─────────────────────────────────────────────
  loadHariIni(): void {
    this.loading.set(true);
    this.svc.getHariIni().subscribe({
      next: d => { this.hariIni.set(d); this.loading.set(false); },
      error: () => { this.loading.set(false); }
    });
  }

  loadRiwayat(): void {
    this.loadingRiwayat.set(true);
    this.svc.getRiwayat(this.filterBulan, this.filterTahun).subscribe({
      next: d => { this.riwayat.set(d); this.loadingRiwayat.set(false); },
      error: () => { this.loadingRiwayat.set(false); }
    });
  }

  onFilterRiwayat(): void { this.loadRiwayat(); }

  // ── Check In ──────────────────────────────────────────────
  doCheckIn(): void {
    if (!this.fotoFile) {
      this.error.set('Foto selfie wajib diambil sebelum check-in.');
      return;
    }
    this.saving.set(true);
    this.error.set('');
    this.successMsg.set('');
    this.svc.checkIn(this.catatanCheckIn || undefined, this.fotoFile,
                     this.lokasiLat ?? undefined, this.lokasiLng ?? undefined).subscribe({
      next: d => {
        this.hariIni.set(d);
        this.saving.set(false);
        this.successMsg.set('✅ Check-in berhasil!');
        this.catatanCheckIn = '';
        this.fotoFile        = null;
        this.fotoPreview     = null;
        this.fotoMode        = 'idle';
        this.lokasiLat       = null;
        this.lokasiLng       = null;
        this.lokasiStatus    = 'idle';
        this.loadRiwayat();
        // Langsung ambil lokasi untuk persiapan check-out
        this.dapatkanLokasi();
        setTimeout(() => this.successMsg.set(''), 3000);
      },
      error: err => {
        this.error.set(err?.error?.message ?? 'Gagal check-in. Coba lagi.');
        this.saving.set(false);
      }
    });
  }

  // ── Check Out ─────────────────────────────────────────────
  doCheckOut(): void {
    this.saving.set(true);
    this.error.set('');
    this.successMsg.set('');
    this.svc.checkOut(this.catatanCheckOut || undefined,
                      this.lokasiLat ?? undefined, this.lokasiLng ?? undefined).subscribe({
      next: d => {
        this.hariIni.set(d);
        this.saving.set(false);
        this.successMsg.set('✅ Check-out berhasil!');
        this.catatanCheckOut = '';
        this.lokasiLat       = null;
        this.lokasiLng       = null;
        this.lokasiStatus    = 'idle';
        this.loadRiwayat();
        setTimeout(() => this.successMsg.set(''), 3000);
      },
      error: err => {
        this.error.set(err?.error?.message ?? 'Gagal check-out. Coba lagi.');
        this.saving.set(false);
      }
    });
  }
}
