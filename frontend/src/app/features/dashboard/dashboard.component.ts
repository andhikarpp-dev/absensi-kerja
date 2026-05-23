import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { LayoutComponent } from '../../shared/layout/layout.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, CommonModule, LayoutComponent],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  auth = inject(AuthService);

  filterTanggal = new Date().toISOString().substring(0, 10);
  showAllDivisi = false;

  toggleShowAllDivisi() {
    this.showAllDivisi = !this.showAllDivisi;
  }

  // ── Statistik Karyawan per Umur ─────────────────────────────
  statsUmur = [
    { label: '< 25 tahun',  jumlah: 12, persen: 12, warna: '#38bdf8' },
    { label: '25 – 34 tahun', jumlah: 38, persen: 38, warna: '#4f46e5' },
    { label: '35 – 44 tahun', jumlah: 31, persen: 31, warna: '#8b5cf6' },
    { label: '45 – 54 tahun', jumlah: 14, persen: 14, warna: '#f59e0b' },
    { label: '≥ 55 tahun',   jumlah: 5,  persen: 5,  warna: '#f87171' },
  ];

  // ── Statistik Karyawan per Generasi ─────────────────────────
  statsGenerasi = [
    { label: 'Baby Boomers (1946–1964)',  jumlah: 8,  persen: 8,  warna: '#f87171' },
    { label: 'Generasi X (1965–1980)',    jumlah: 22, persen: 22, warna: '#f59e0b' },
    { label: 'Millennials (1981–1996)',   jumlah: 45, persen: 45, warna: '#4f46e5' },
    { label: 'Generasi Z (1997–2012)',    jumlah: 25, persen: 25, warna: '#38bdf8' },
  ];

  // ── Kehadiran per Divisi ─────────────────────────────────────
  kehadiranDivisi = [
    { nama: 'Teknologi Informasi', hadir: 18, total: 20, persen: 90 },
    { nama: 'Keuangan',            hadir: 12, total: 13, persen: 92 },
    { nama: 'Sumber Daya Manusia', hadir: 9,  total: 10, persen: 90 },
    { nama: 'Operasional',         hadir: 22, total: 25, persen: 88 },
    { nama: 'Pemasaran',           hadir: 14, total: 15, persen: 93 },
    { nama: 'Hukum & Kepatuhan',   hadir: 7,  total: 8,  persen: 87 },
    { nama: 'Pengadaan',           hadir: 6,  total: 6,  persen: 100 },
    { nama: 'Manajemen Umum',      hadir: 4,  total: 5,  persen: 80 },
  ];

  // ── Chart Presensi masuk per hari ───────────────────────────
  chartPresensi = [
    { hari: '1',  jumlah: 88, tinggi: 110, warna: '#4ade80' },
    { hari: '2',  jumlah: 85, tinggi: 106, warna: '#4ade80' },
    { hari: '3',  jumlah: 90, tinggi: 113, warna: '#4ade80' },
    { hari: '4',  jumlah: 78, tinggi: 98,  warna: '#facc15' },
    { hari: '5',  jumlah: 70, tinggi: 88,  warna: '#facc15' },
    { hari: '7',  jumlah: 92, tinggi: 115, warna: '#4ade80' },
    { hari: '8',  jumlah: 87, tinggi: 109, warna: '#4ade80' },
    { hari: '9',  jumlah: 83, tinggi: 104, warna: '#4ade80' },
    { hari: '10', jumlah: 75, tinggi: 94,  warna: '#f87171' },
    { hari: '11', jumlah: 91, tinggi: 114, warna: '#4ade80' },
    { hari: '14', jumlah: 89, tinggi: 111, warna: '#4ade80' },
    { hari: '15', jumlah: 86, tinggi: 108, warna: '#4ade80' },
    { hari: '16', jumlah: 82, tinggi: 103, warna: '#facc15' },
    { hari: '17', jumlah: 93, tinggi: 116, warna: '#4ade80' },
    { hari: '18', jumlah: 88, tinggi: 110, warna: '#4ade80' },
  ];

  // ── Top 5 Paling Terlambat ───────────────────────────────────
  top5Terlambat = [
    { nama: 'Ahmad Fauzi',    divisi: 'Operasional',  jumlah: 12, durasi: '3j 24m' },
    { nama: 'Budi Santoso',   divisi: 'Pemasaran',    jumlah: 10, durasi: '2j 50m' },
    { nama: 'Citra Dewi',     divisi: 'Keuangan',     jumlah: 9,  durasi: '2j 15m' },
    { nama: 'Dian Pratama',   divisi: 'TI',           jumlah: 7,  durasi: '1j 45m' },
    { nama: 'Eko Setiawan',   divisi: 'Pengadaan',    jumlah: 6,  durasi: '1j 20m' },
  ];

  // ── Top 5 Paling Disiplin ────────────────────────────────────
  top5Disiplin = [
    { nama: 'Sari Indah',      divisi: 'SDM',         skor: 99.2 },
    { nama: 'Rendra Wijaya',   divisi: 'TI',          skor: 98.7 },
    { nama: 'Nurul Hidayah',   divisi: 'Keuangan',    skor: 98.1 },
    { nama: 'Andi Kurniawan',  divisi: 'Manajemen',   skor: 97.5 },
    { nama: 'Maya Susanti',    divisi: 'Pemasaran',   skor: 97.0 },
  ];

  // ── Performa Kehadiran Harian ────────────────────────────────
  performaHarian = [
    { nama: 'Sari Indah',     divisi: 'SDM',       jadwal: '08:00–17:00', deskripsi: 'Shift Normal', waktu: '07:52' },
    { nama: 'Rendra Wijaya',  divisi: 'TI',        jadwal: '08:00–17:00', deskripsi: 'Shift Normal', waktu: '07:58' },
    { nama: 'Nurul Hidayah',  divisi: 'Keuangan',  jadwal: '08:00–17:00', deskripsi: 'Shift Normal', waktu: '07:55' },
    { nama: 'Andi Kurniawan', divisi: 'Manajemen', jadwal: '07:30–16:30', deskripsi: 'Shift Pagi',   waktu: '07:28' },
    { nama: 'Maya Susanti',   divisi: 'Pemasaran', jadwal: '08:00–17:00', deskripsi: 'Shift Normal', waktu: '07:50' },
  ];

  // ── Ringkasan Lokasi Kehadiran ───────────────────────────────
  ringkasanLokasi = [
    { nama: 'Hadir di Kantor',   jumlah: 68, persen: 72, warna: '#22c55e', bg: '#dcfce7', icon: 'bx-building' },
    { nama: 'Work From Home',    jumlah: 18, persen: 19, warna: '#4f46e5', bg: '#ede9fe', icon: 'bx-home' },
    { nama: 'Dinas Luar',        jumlah: 8,  persen: 9,  warna: '#f59e0b', bg: '#fef3c7', icon: 'bx-car' },
  ];

  // ── Karyawan per Divisi ──────────────────────────────────────
  karyawanPerDivisi = [
    { nama: 'Teknologi Informasi', total: 20, persen: 20 },
    { nama: 'Keuangan',            total: 13, persen: 13 },
    { nama: 'Sumber Daya Manusia', total: 10, persen: 10 },
    { nama: 'Operasional',         total: 25, persen: 25 },
    { nama: 'Pemasaran',           total: 15, persen: 15 },
    { nama: 'Hukum & Kepatuhan',   total: 8,  persen: 8  },
    { nama: 'Pengadaan',           total: 6,  persen: 6  },
    { nama: 'Manajemen Umum',      total: 5,  persen: 5  },
  ];

  warnaDivisi = ['#4f46e5','#22c55e','#f59e0b','#38bdf8','#ec4899','#8b5cf6','#14b8a6','#f87171'];

  // ── Cuti & Izin 7 Hari ke Depan ─────────────────────────────
  cutiIzin7Hari = [
    { nama: 'Dewi Anggraini',  divisi: 'SDM',       jenis: 'CUTI',  tanggalMulai: '11 Apr', tanggalSelesai: '12 Apr', hari: 2 },
    { nama: 'Fajar Nugroho',   divisi: 'TI',        jenis: 'IZIN',  tanggalMulai: '11 Apr', tanggalSelesai: '11 Apr', hari: 1 },
    { nama: 'Hana Pertiwi',    divisi: 'Keuangan',  jenis: 'CUTI',  tanggalMulai: '13 Apr', tanggalSelesai: '17 Apr', hari: 5 },
    { nama: 'Irwan Saputra',   divisi: 'Pemasaran', jenis: 'IZIN',  tanggalMulai: '14 Apr', tanggalSelesai: '14 Apr', hari: 1 },
    { nama: 'Joko Widodo',     divisi: 'Operasional',jenis: 'CUTI', tanggalMulai: '14 Apr', tanggalSelesai: '16 Apr', hari: 3 },
    { nama: 'Kartini Dewi',    divisi: 'Pengadaan', jenis: 'IZIN',  tanggalMulai: '15 Apr', tanggalSelesai: '15 Apr', hari: 1 },
    { nama: 'Lukman Hakim',    divisi: 'Hukum',     jenis: 'CUTI',  tanggalMulai: '16 Apr', tanggalSelesai: '17 Apr', hari: 2 },
  ];
}
