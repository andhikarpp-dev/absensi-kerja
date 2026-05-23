import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KaryawanService } from '../../../core/services/karyawan.service';
import { AbsensiService } from '../../../core/services/absensi.service';
import { Karyawan } from '../../../core/models/karyawan.model';
import { Absensi } from '../../../core/models/absensi.model';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-karyawan-lembur',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, LayoutComponent],
  templateUrl: './karyawan-lembur.component.html',
  styleUrl: './karyawan-lembur.component.scss'
})
export class KaryawanLemburComponent implements OnInit {
  private route       = inject(ActivatedRoute);
  private karyawanSvc = inject(KaryawanService);
  private absensiSvc  = inject(AbsensiService);

  karyawan = signal<Karyawan | null>(null);
  list     = signal<Absensi[]>([]);
  loading  = signal(true);
  error    = signal('');

  // ── Filter tanggal ─────────────────────────────────────────
  today    = new Date();
  private toDateStr(d: Date): string {
    return `${d.getDate().toString().padStart(2,'0')}/${(d.getMonth()+1).toString().padStart(2,'0')}/${d.getFullYear()}`;
  }
  private toIso(d: Date): string {
    return `${d.getFullYear()}-${(d.getMonth()+1).toString().padStart(2,'0')}-${d.getDate().toString().padStart(2,'0')}`;
  }

  // default: 1 bulan ke belakang s/d hari ini
  private get defaultFrom(): Date {
    const d = new Date(this.today);
    d.setMonth(d.getMonth() - 1);
    return d;
  }

  dariTgl  = signal(this.toIso(this.defaultFrom));
  sampaiTgl = signal(this.toIso(this.today));
  cari     = signal('');

  // ── Pagination ─────────────────────────────────────────────
  readonly PAGE_SIZE = 10;
  halaman = signal(1);

  // ── Computed: filter & paginate ───────────────────────────
  listLembur = computed(() =>
    this.list().filter(a => a.jamMulaiLembur)
  );

  listFiltered = computed(() => {
    const kata = this.cari().toLowerCase().trim();
    const dari   = this.dariTgl();
    const sampai = this.sampaiTgl();
    return this.listLembur().filter(a => {
      const tglOk = (!dari || a.tanggal >= dari) && (!sampai || a.tanggal <= sampai);
      const cariOk = !kata || a.namaKaryawan?.toLowerCase().includes(kata)
                           || a.tanggal.includes(kata);
      return tglOk && cariOk;
    });
  });

  totalData = computed(() => this.listFiltered().length);

  totalHalaman = computed(() => Math.max(1, Math.ceil(this.totalData() / this.PAGE_SIZE)));

  listHalaman = computed(() => {
    const start = (this.halaman() - 1) * this.PAGE_SIZE;
    return this.listFiltered().slice(start, start + this.PAGE_SIZE);
  });

  // ── Methods ────────────────────────────────────────────────
  fotoUrl(path?: string): string | null {
    if (!path) return null;
    if (path.startsWith('http')) return path;
    return `${environment.baseUrl}/${path}`;
  }

  formatTanggal(tgl: string): string {
    const d = new Date(tgl);
    const hari = ['Min','Sen','Sel','Rab','Kam','Jum','Sab'][d.getDay()];
    const bln  = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'][d.getMonth()];
    return `${hari}, ${d.getDate()} ${bln} ${d.getFullYear()}`;
  }

  formatJam(jam?: string): string {
    if (!jam) return '—';
    return jam.substring(0, 5);
  }

  formatDurasi(a: Absensi): string {
    if (!a.jamMulaiLembur || !a.jamSelesaiLembur) return '—';
    const [h1, m1] = a.jamMulaiLembur.split(':').map(Number);
    const [h2, m2] = a.jamSelesaiLembur.split(':').map(Number);
    const total = (h2 * 60 + m2) - (h1 * 60 + m1);
    if (total <= 0) return '—';
    const jam = Math.floor(total / 60);
    const mnt = total % 60;
    const parts: string[] = [];
    if (jam > 0) parts.push(`${jam} jam`);
    if (mnt > 0) parts.push(`${mnt} menit`);
    return parts.join(' ');
  }

  resetFilter(): void {
    this.dariTgl.set(this.toIso(this.defaultFrom));
    this.sampaiTgl.set(this.toIso(this.today));
    this.cari.set('');
    this.halaman.set(1);
    this.loadData();
  }

  cariData(): void {
    this.halaman.set(1);
  }

  halamanSebelumnya(): void {
    if (this.halaman() > 1) this.halaman.set(this.halaman() - 1);
  }

  halamanBerikutnya(): void {
    if (this.halaman() < this.totalHalaman()) this.halaman.set(this.halaman() + 1);
  }

  loadData(): void {
    const k = this.karyawan();
    if (!k) return;
    this.loading.set(true);
    // Ambil rentang tahun-bulan dari filter tanggal, atau semua jika lebar
    // Untuk kesederhanaan: muat semua data tahun ini + tahun lalu
    const tahunIni  = this.today.getFullYear();
    const requests  = [tahunIni, tahunIni - 1];
    let allData: Absensi[] = [];
    let done = 0;
    for (const tahun of requests) {
      for (let bulan = 1; bulan <= 12; bulan++) {
        this.absensiSvc.getRiwayatByKaryawan(k.id, bulan, tahun).subscribe({
          next: data => {
            allData = [...allData, ...data.filter(a => a.jamMulaiLembur)];
            done++;
            if (done === requests.length * 12) {
              // sort descending by tanggal
              allData.sort((a, b) => b.tanggal.localeCompare(a.tanggal));
              this.list.set(allData);
              this.loading.set(false);
            }
          },
          error: () => {
            done++;
            if (done === requests.length * 12) {
              allData.sort((a, b) => b.tanggal.localeCompare(a.tanggal));
              this.list.set(allData);
              this.loading.set(false);
            }
          }
        });
      }
    }
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.karyawanSvc.findById(id).subscribe({
      next: k => { this.karyawan.set(k); this.loadData(); },
      error: () => { this.error.set('Gagal memuat data karyawan.'); this.loading.set(false); }
    });
  }
}
