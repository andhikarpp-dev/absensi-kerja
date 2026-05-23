import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KaryawanService } from '../../../core/services/karyawan.service';
import { PolaKerjaService } from '../../../core/services/pola-kerja.service';
import { Karyawan } from '../../../core/models/karyawan.model';
import { PolaKerja, HariKerja } from '../../../core/models/pola-kerja.model';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { environment } from '../../../../environments/environment';

export interface JadwalHarianItem {
  tanggal: Date;
  namaHari: string;
  labelTanggal: string;
  tipe: 'HARI_KERJA' | 'JADWAL_LIBUR' | 'KALENDER_LIBUR';
  keterangan: string;
}

@Component({
  selector: 'app-karyawan-jadwal-kerja',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, LayoutComponent],
  templateUrl: './karyawan-jadwal-kerja.component.html',
  styleUrl: './karyawan-jadwal-kerja.component.scss'
})
export class KaryawanJadwalKerjaComponent implements OnInit {
  private route        = inject(ActivatedRoute);
  private karyawanSvc  = inject(KaryawanService);
  private polaKerjaSvc = inject(PolaKerjaService);

  karyawan  = signal<Karyawan | null>(null);
  polaKerja = signal<PolaKerja | null>(null);
  loading   = signal(true);
  error     = signal('');

  // ── Modal Ubah Pola Kerja ─────────────────────────────────
  showModal      = signal(false);
  allPolaKerja   = signal<PolaKerja[]>([]);
  selectedPolaId = signal<number | null>(null);
  modalSaving    = signal(false);
  modalError     = signal('');

  selectedPolaPreview = computed<PolaKerja | null>(() =>
    this.allPolaKerja().find(p => p.id === this.selectedPolaId()) ?? null
  );

  openModal(): void {
    this.selectedPolaId.set(this.polaKerja()?.id ?? null);
    this.modalError.set('');
    this.showModal.set(true);
    if (this.allPolaKerja().length === 0) {
      this.polaKerjaSvc.findAll().subscribe({
        next: list => this.allPolaKerja.set(list),
        error: ()  => this.modalError.set('Gagal memuat daftar pola kerja.')
      });
    }
  }

  closeModal(): void { this.showModal.set(false); }

  savePolaKerja(): void {
    const k   = this.karyawan();
    const pid = this.selectedPolaId();
    if (!k || !pid) { this.modalError.set('Pilih pola kerja terlebih dahulu.'); return; }

    this.modalSaving.set(true);
    this.modalError.set('');
    this.karyawanSvc.updatePolaKerja(k.id, pid).subscribe({
      next: () => {
        if (k.divisiId) {
          this.polaKerjaSvc.findByDivisi(k.divisiId).subscribe({
            next: list => {
              this.polaKerja.set(list.find(p => p.id === pid) ?? list[0] ?? null);
              this.modalSaving.set(false);
              this.showModal.set(false);
            },
            error: () => { this.modalSaving.set(false); this.showModal.set(false); }
          });
        } else {
          this.modalSaving.set(false);
          this.showModal.set(false);
        }
      },
      error: (err) => {
        this.modalError.set(err?.error?.message ?? 'Gagal menyimpan pola kerja.');
        this.modalSaving.set(false);
      }
    });
  }

  // ── Filter tanggal ────────────────────────────────────────
  today      = new Date();
  tglMulai   = signal<string>(this.firstDayOfMonth());
  tglSelesai = signal<string>(this.formatDate(this.today));

  private firstDayOfMonth(): string {
    const d = new Date(this.today.getFullYear(), this.today.getMonth(), 1);
    return this.formatDate(d);
  }

  private formatDate(d: Date): string {
    const y  = d.getFullYear();
    const m  = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${dd}`;
  }

  fotoUrl(path?: string): string | null {
    if (!path) return null;
    if (path.startsWith('http')) return path;
    return `${environment.baseUrl}/${path}`;
  }

  private readonly HARI_ID: Record<number, HariKerja> = {
    1: 'SENIN', 2: 'SELASA', 3: 'RABU', 4: 'KAMIS',
    5: 'JUMAT', 6: 'SABTU', 0: 'MINGGU'
  };
  private readonly HARI_LABEL: Record<number, string> = {
    0: 'Minggu', 1: 'Senin', 2: 'Selasa', 3: 'Rabu',
    4: 'Kamis', 5: 'Jumat', 6: 'Sabtu'
  };
  private readonly BULAN_LABEL = [
    'Jan','Feb','Mar','Apr','Mei','Jun',
    'Jul','Agu','Sep','Okt','Nov','Des'
  ];

  jadwalHarian = computed<JadwalHarianItem[]>(() => {
    const pola = this.polaKerja();
    const dari = new Date(this.tglMulai());
    const ke   = new Date(this.tglSelesai());
    if (!pola || isNaN(dari.getTime()) || isNaN(ke.getTime())) return [];

    const hasil: JadwalHarianItem[] = [];
    const cursor = new Date(dari);
    while (cursor <= ke) {
      const dow       = cursor.getDay();
      const hariKerja = this.HARI_ID[dow];
      const hariItem  = pola.hariList.find(h => h.hari === hariKerja);
      const tglLabel  = `${this.HARI_LABEL[dow]}, ${cursor.getDate()} ${this.BULAN_LABEL[cursor.getMonth()]} ${cursor.getFullYear()}`;

      let tipe: JadwalHarianItem['tipe'];
      let keterangan: string;

      if (!hariItem || hariItem.polaHari === 'LIBUR') {
        tipe = 'JADWAL_LIBUR';
        keterangan = `${pola.namaPolaKerja} — Jadwal Libur`;
      } else {
        tipe = 'HARI_KERJA';
        const jam       = hariItem.jamMasuk && hariItem.jamKeluar ? `(${hariItem.jamMasuk} - ${hariItem.jamKeluar})` : '';
        const toleransi = pola.toleransiKeterlambatan ? `— Toleransi Keterlambatan ${pola.toleransiKeterlambatan} Menit` : '';
        keterangan = `${pola.namaPolaKerja} (${this.jenisJadwalLabel(pola.jenisJadwal)}) - ${jam} ${toleransi}`.trim();
      }

      hasil.push({ tanggal: new Date(cursor), namaHari: this.HARI_LABEL[dow], labelTanggal: tglLabel, tipe, keterangan });
      cursor.setDate(cursor.getDate() + 1);
    }
    return hasil;
  });

  totalHariKerja     = computed(() => this.jadwalHarian().filter(j => j.tipe === 'HARI_KERJA').length);
  totalJadwalLibur   = computed(() => this.jadwalHarian().filter(j => j.tipe === 'JADWAL_LIBUR').length);
  totalKalenderLibur = computed(() => this.jadwalHarian().filter(j => j.tipe === 'KALENDER_LIBUR').length);
  totalHari          = computed(() => this.jadwalHarian().length);

  jenisJadwalLabel(j?: string): string {
    return j === 'JAM_TETAP' ? 'Hari Kerja' : j === 'JAM_FLEKSIBEL' ? 'Fleksibel' : j ?? '';
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.karyawanSvc.findById(id).subscribe({
      next: k => {
        this.karyawan.set(k);
        if (k.divisiId) {
          this.polaKerjaSvc.findByDivisi(k.divisiId).subscribe({
            next: list => { this.polaKerja.set(list[0] ?? null); this.loading.set(false); },
            error: ()  => { this.error.set('Gagal memuat pola kerja.'); this.loading.set(false); }
          });
        } else {
          this.loading.set(false);
        }
      },
      error: () => { this.error.set('Gagal memuat data karyawan.'); this.loading.set(false); }
    });
  }
}
