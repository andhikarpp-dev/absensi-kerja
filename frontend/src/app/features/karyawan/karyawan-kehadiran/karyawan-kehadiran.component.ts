import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KaryawanService } from '../../../core/services/karyawan.service';
import { AbsensiService } from '../../../core/services/absensi.service';
import { Karyawan } from '../../../core/models/karyawan.model';
import { Absensi, StatusAbsensi, RingkasanKehadiran } from '../../../core/models/absensi.model';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-karyawan-kehadiran',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, LayoutComponent],
  templateUrl: './karyawan-kehadiran.component.html',
  styleUrl: './karyawan-kehadiran.component.scss'
})
export class KaryawanKehadiranComponent implements OnInit {

  private route       = inject(ActivatedRoute);
  private karyawanSvc = inject(KaryawanService);
  private absensiSvc  = inject(AbsensiService);

  // ── State ──────────────────────────────────────────────────
  karyawan         = signal<Karyawan | null>(null);
  list             = signal<Absensi[]>([]);
  loading          = signal(true);
  error            = signal('');
  ringkasan        = signal<RingkasanKehadiran | null>(null);
  loadingRingkasan = signal(false);

  // ── Filter ─────────────────────────────────────────────────
  today = new Date();
  bulan = signal(this.today.getMonth() + 1);
  tahun = signal(this.today.getFullYear());

  readonly BULAN_LABEL = [
    '', 'Januari','Februari','Maret','April','Mei','Juni',
    'Juli','Agustus','September','Oktober','November','Desember'
  ];
  readonly TAHUN_LIST = Array.from({ length: 5 }, (_, i) => this.today.getFullYear() - i);

  // ── Tab ────────────────────────────────────────────────────
  activeTab = signal<'harian' | 'ringkasan' | 'catatan' | 'selfie' | 'lokasi' | 'fingerspot'>('harian');

  // ── Navigasi Minggu ────────────────────────────────────────
  mingguAktif = signal<string>('');   // diisi di ngOnInit agar getMondayOf tersedia

  hariMingguIni = computed(() => {
    const val = this.mingguAktif();
    if (!val) return [] as string[];
    const senin = new Date(val);
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(senin);
      d.setDate(senin.getDate() + i);
      return this.formatDate(d);
    });
  });

  labelMinggu = computed(() => {
    const days = this.hariMingguIni();
    if (days.length < 7) return '';
    const fmt = (s: string) => {
      const d = new Date(s);
      return `${d.getDate()} ${this.BULAN_LABEL[d.getMonth() + 1].substring(0, 3)} ${d.getFullYear()}`;
    };
    return `${fmt(days[0])} – ${fmt(days[6])}`;
  });

  absensiMap = computed(() => {
    const m = new Map<string, Absensi>();
    for (const a of this.list()) m.set(a.tanggal, a);
    return m;
  });

  listDenganCatatan = computed(() =>
    this.list().filter(a => a.catatanMasuk || a.catatanKeluar)
  );

  listDenganLokasi = computed(() =>
    this.list().filter(a => a.lokasiMasukUrl || a.lokasiKeluarUrl)
  );

  // ── Statistik ──────────────────────────────────────────────
  totalHadir     = computed(() => this.list().filter(a => a.status === 'HADIR').length);
  totalIzin      = computed(() => this.list().filter(a => a.status === 'IZIN').length);
  totalSakit     = computed(() => this.list().filter(a => a.status === 'SAKIT').length);
  totalAlpha     = computed(() => this.list().filter(a => a.status === 'ALPHA').length);
  totalTerlambat = computed(() => this.list().filter(a => a.menitTerlambat > 0).length);
  totalHariData  = computed(() => this.list().length);

  // ── Modal Foto Selfie ──────────────────────────────────────
  fotoModalUrl   = signal<string | null>(null);
  fotoModalJudul = signal<string>('');

  // ── Fingerspot ─────────────────────────────────────────────
  fingerspotAktif  = signal<boolean>(false);
  fingerspotSaving = signal(false);
  fingerspotToast  = signal(false);
  private _fingerspotTimer: any = null;

  // ── Modal Tambah Presensi ──────────────────────────────────
  showModal   = signal(false);
  modalSaving = signal(false);
  modalError  = signal('');
  form = signal({
    tanggal:      '',   // diisi di ngOnInit
    tipePresensi: 'MASUK_KELUAR',
    waktuMulai:   '08:00',
    waktuSelesai: '',
    catatan:      ''
  });

  readonly TIPE_LIST = [
    { value: 'MASUK_KELUAR', label: 'Masuk - Keluar' },
    { value: 'ISTIRAHAT',    label: 'Mulai Istirahat - Selesai Istirahat' },
    { value: 'LEMBUR',       label: 'Mulai Lembur - Selesai Lembur' }
  ];

  tipeLabel = computed(() =>
    this.TIPE_LIST.find(t => t.value === this.form().tipePresensi)?.label ?? ''
  );

  waktuMulaiLabel = computed(() => {
    switch (this.form().tipePresensi) {
      case 'ISTIRAHAT': return 'Mulai Istirahat';
      case 'LEMBUR':    return 'Mulai Lembur';
      default:          return 'Waktu Masuk';
    }
  });

  waktuSelesaiLabel = computed(() => {
    switch (this.form().tipePresensi) {
      case 'ISTIRAHAT': return 'Selesai Istirahat';
      case 'LEMBUR':    return 'Selesai Lembur';
      default:          return 'Waktu Keluar';
    }
  });

  // ══════════════════════════════════════════════════════════
  //  METHODS
  // ══════════════════════════════════════════════════════════

  // ── Tab ────────────────────────────────────────────────────
  setTab(tab: 'harian' | 'ringkasan' | 'catatan' | 'selfie' | 'lokasi' | 'fingerspot'): void {
    this.activeTab.set(tab);
    if (tab === 'ringkasan') this.loadRingkasan();
    if (tab === 'catatan' || tab === 'selfie') this.syncMingguKeHariIni();
  }

  // ── Fingerspot ────────────────────────────────────────────
  setFingerspot(val: boolean): void {
    this.fingerspotAktif.set(val);
  }

  simpanFingerspot(): void {
    this.fingerspotSaving.set(true);
    // Simulasi penyimpanan (ganti dengan API call jika sudah tersedia)
    setTimeout(() => {
      this.fingerspotSaving.set(false);
      this.showFingerspotToast();
    }, 600);
  }

  showFingerspotToast(): void {
    if (this._fingerspotTimer) clearTimeout(this._fingerspotTimer);
    this.fingerspotToast.set(true);
    this._fingerspotTimer = setTimeout(() => this.fingerspotToast.set(false), 3000);
  }

  // ── Helper: format & tanggal ───────────────────────────────
  formatDate(d: Date): string {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  getMondayOf(d: Date): string {
    const day  = d.getDay();
    const diff = day === 0 ? -6 : 1 - day;
    const mon  = new Date(d);
    mon.setDate(d.getDate() + diff);
    return this.formatDate(mon);
  }

  formatJam(jam?: string): string {
    if (!jam) return '—';
    return jam.substring(0, 8);   // HH:mm:ss
  }

  formatTanggal(tgl: string): string {
    const d    = new Date(tgl);
    const hari = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'][d.getDay()];
    return `${hari}, ${d.getDate()} ${this.BULAN_LABEL[d.getMonth() + 1].substring(0, 3)} ${d.getFullYear()}`;
  }

  formatDurasi(totalMenit: number): string {
    if (!totalMenit || totalMenit <= 0) return '—';
    const jam  = Math.floor(totalMenit / 60);
    const mnt  = totalMenit % 60;
    const parts: string[] = [];
    if (jam > 0) parts.push(`${jam}jm`);
    if (mnt > 0) parts.push(`${mnt}mn`);
    return parts.join(' ') || '0';
  }

  statusClass(s: StatusAbsensi): string {
    const map: Record<StatusAbsensi, string> = {
      HADIR: 'badge-hadir', IZIN: 'badge-izin',
      SAKIT: 'badge-sakit', ALPHA: 'badge-alpha'
    };
    return map[s] ?? '';
  }

  fotoUrl(path?: string): string | null {
    if (!path) return null;
    if (path.startsWith('http')) return path;
    return `${environment.baseUrl}/${path}`;
  }

  barWidth(value: number, max: number): number {
    if (max === 0) return 0;
    return Math.min(100, Math.round((value / max) * 100));
  }

  // ── Navigasi Minggu ────────────────────────────────────────
  getAbsensi(tgl: string): Absensi | null {
    return this.absensiMap().get(tgl) ?? null;
  }

  isHariIni(tgl: string): boolean {
    return tgl === this.formatDate(this.today);
  }

  labelHari(tgl: string): string {
    const d    = new Date(tgl);
    const hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'][d.getDay()];
    const bln  = this.BULAN_LABEL[d.getMonth() + 1].substring(0, 3);
    return `${hari}, ${d.getDate()} ${bln}`;
  }

  mingguSebelumnya(): void {
    const d = new Date(this.mingguAktif());
    d.setDate(d.getDate() - 7);
    this.mingguAktif.set(this.formatDate(d));
    const b = d.getMonth() + 1, y = d.getFullYear();
    if (b !== this.bulan() || y !== this.tahun()) {
      this.bulan.set(b); this.tahun.set(y); this.loadData();
    }
  }

  mingguBerikutnya(): void {
    const d = new Date(this.mingguAktif());
    d.setDate(d.getDate() + 7);
    this.mingguAktif.set(this.formatDate(d));
    const b = d.getMonth() + 1, y = d.getFullYear();
    if (b !== this.bulan() || y !== this.tahun()) {
      this.bulan.set(b); this.tahun.set(y); this.loadData();
    }
  }

  syncMingguKeHariIni(): void {
    this.mingguAktif.set(this.getMondayOf(this.today));
    this.bulan.set(this.today.getMonth() + 1);
    this.tahun.set(this.today.getFullYear());
  }

  syncMingguKeBulan(): void {
    const d = new Date(this.tahun(), this.bulan() - 1, 1);
    this.mingguAktif.set(this.getMondayOf(d));
  }

  // ── Modal Foto ─────────────────────────────────────────────
  bukaFotoModal(url: string, judul: string): void {
    this.fotoModalUrl.set(url);
    this.fotoModalJudul.set(judul);
  }

  tutupFotoModal(): void {
    this.fotoModalUrl.set(null);
  }

  // ── Modal ──────────────────────────────────────────────────
  openModal(): void {
    this.form.set({ tanggal: this.formatDate(this.today), tipePresensi: 'MASUK_KELUAR', waktuMulai: '08:00', waktuSelesai: '', catatan: '' });
    this.modalError.set('');
    this.showModal.set(true);
  }

  closeModal(): void { this.showModal.set(false); }

  updateForm(field: string, value: string): void {
    this.form.update(f => ({ ...f, [field]: value }));
  }

  simpan(): void {
    const f = this.form();
    const k = this.karyawan();
    if (!k) return;
    if (!f.tanggal)    { this.modalError.set('Tanggal wajib diisi.'); return; }
    if (!f.waktuMulai) { this.modalError.set('Waktu mulai wajib diisi.'); return; }

    this.modalSaving.set(true);
    this.modalError.set('');
    this.absensiSvc.tambahManual(k.id, {
      tanggal:      f.tanggal,
      tipePresensi: f.tipePresensi,
      waktuMulai:   f.waktuMulai   || undefined,
      waktuSelesai: f.waktuSelesai || undefined,
      catatan:      f.catatan      || undefined
    }).subscribe({
      next: absensi => {
        this.list.update(l => {
          const idx = l.findIndex(a => a.tanggal === absensi.tanggal);
          if (idx >= 0) { const n = [...l]; n[idx] = absensi; return n; }
          return [absensi, ...l];
        });
        this.modalSaving.set(false);
        this.showModal.set(false);
      },
      error: err => {
        this.modalError.set(err?.error?.message ?? 'Gagal menyimpan presensi.');
        this.modalSaving.set(false);
      }
    });
  }

  // ── Data Loading ───────────────────────────────────────────
  loadData(): void {
    const k = this.karyawan();
    if (!k) return;
    this.loading.set(true);
    this.absensiSvc.getRiwayatByKaryawan(k.id, this.bulan(), this.tahun()).subscribe({
      next: data => { this.list.set(data); this.loading.set(false); },
      error: ()   => { this.error.set('Gagal memuat data kehadiran.'); this.loading.set(false); }
    });
  }

  loadRingkasan(): void {
    const k = this.karyawan();
    if (!k) return;
    this.loadingRingkasan.set(true);
    this.absensiSvc.getRingkasanByKaryawan(k.id, this.bulan(), this.tahun()).subscribe({
      next: data => { this.ringkasan.set(data); this.loadingRingkasan.set(false); },
      error: ()   => { this.loadingRingkasan.set(false); }
    });
  }

  onBulanChange(v: string): void {
    this.bulan.set(+v);
    this.loadData();
    if (this.activeTab() === 'ringkasan') this.loadRingkasan();
    if (this.activeTab() === 'catatan' || this.activeTab() === 'selfie') this.syncMingguKeBulan();
  }

  onTahunChange(v: string): void {
    this.tahun.set(+v);
    this.loadData();
    if (this.activeTab() === 'ringkasan') this.loadRingkasan();
    if (this.activeTab() === 'catatan' || this.activeTab() === 'selfie') this.syncMingguKeBulan();
  }

  // ── Lifecycle ──────────────────────────────────────────────
  ngOnInit(): void {
    // inisialisasi field yang butuh method
    this.mingguAktif.set(this.getMondayOf(this.today));
    this.form.update(f => ({ ...f, tanggal: this.formatDate(this.today) }));

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.karyawanSvc.findById(id).subscribe({
      next: k => { this.karyawan.set(k); this.loadData(); },
      error: () => { this.error.set('Gagal memuat data karyawan.'); this.loading.set(false); }
    });
  }
}
