import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';

export const routes: Routes = [
  // ── Public ──────────────────────────────────────────────────
  {
    path: '',
    loadComponent: () =>
      import('./features/landing/landing.component').then(m => m.LandingComponent)
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes').then(m => m.authRoutes)
  },

  // ── Daftar (registrasi perusahaan baru) ─────────────────────
  {
    path: 'daftar',
    loadComponent: () =>
      import('./features/daftar/daftar.component').then(m => m.DaftarComponent)
  },

  // ── Dashboard — ADMIN & PEMILIK saja ────────────────────────
  {
    path: 'dashboard',
    canActivate: [authGuard, roleGuard(['ADMIN', 'PEMILIK'])],
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'absensi',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/absensi/absensi.routes').then(m => m.absensiRoutes)
  },

  // ── ADMIN & PEMILIK saja (izin juga bisa diakses KARYAWAN) ──────
  {
    path: 'karyawan',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/karyawan/karyawan.routes').then(m => m.karyawanRoutes)
  },
  {
    path: 'divisi',
    canActivate: [authGuard, roleGuard(['ADMIN', 'PEMILIK'])],
    loadChildren: () =>
      import('./features/divisi/divisi.routes').then(m => m.divisiRoutes)
  },
  {
    path: 'jabatan',
    canActivate: [authGuard, roleGuard(['ADMIN', 'PEMILIK'])],
    loadChildren: () =>
      import('./features/jabatan/jabatan.routes').then(m => m.jabatanRoutes)
  },
  {
    path: 'laporan',
    canActivate: [authGuard, roleGuard(['ADMIN', 'PEMILIK'])],
    loadChildren: () =>
      import('./features/laporan/laporan.routes').then(m => m.laporanRoutes)
  },

  {
    path: 'lokasi',
    canActivate: [authGuard, roleGuard(['ADMIN', 'PEMILIK'])],
    loadChildren: () =>
      import('./features/lokasi/lokasi.routes').then(m => m.lokasiRoutes)
  },

  // ── Placeholder routes (belum diimplementasi) ─────────────────
  { path: 'jadwal-hari-kerja', redirectTo: 'dashboard', pathMatch: 'prefix' },
  {
    path: 'jadwal-shift',
    canActivate: [authGuard, roleGuard(['ADMIN', 'PEMILIK'])],
    loadChildren: () =>
      import('./features/jadwal-shift/jadwal-shift.routes').then(m => m.jadwalShiftRoutes)
  },
  {
    path: 'surat-peringatan',
    canActivate: [authGuard, roleGuard(['ADMIN', 'PEMILIK'])],
    loadChildren: () =>
      import('./features/surat-peringatan/surat-peringatan.routes').then(m => m.suratPeringatanRoutes)
  },

  // ── Pola Kerja — fitur asli (Hari Kerja) ──────────────────────
  {
    path: 'pola-kerja',
    canActivate: [authGuard, roleGuard(['PEMILIK', 'ADMIN'])],
    loadChildren: () =>
      import('./features/pola-kerja/pola-kerja.routes').then(m => m.polaKerjaRoutes)
  },

  // ── Kehadiran ────────────────────────────────────────────────
  {
    path: 'kehadiran',
    canActivate: [authGuard, roleGuard(['ADMIN', 'PEMILIK'])],
    loadChildren: () =>
      import('./features/kehadiran/kehadiran.routes').then(m => m.kehadiranRoutes)
  },

  // ── Lembur ───────────────────────────────────────────────────
  {
    path: 'lembur',
    canActivate: [authGuard, roleGuard(['ADMIN', 'PEMILIK'])],
    loadChildren: () =>
      import('./features/lembur/lembur.routes').then(m => m.lemburRoutes)
  },

  // ── Izin (Admin/Pemilik) ─────────────────────────────────────
  {
    path: 'izin',
    canActivate: [authGuard, roleGuard(['ADMIN', 'PEMILIK'])],
    loadChildren: () =>
      import('./features/izin/izin.routes').then(m => m.izinRoutes)
  },

  // ── Cuti (Admin/Pemilik) ─────────────────────────────────────
  {
    path: 'cuti',
    canActivate: [authGuard, roleGuard(['ADMIN', 'PEMILIK'])],
    loadChildren: () =>
      import('./features/cuti/cuti.routes').then(m => m.cutiRoutes)
  },

  // ── Klaim (Admin/Pemilik) ─────────────────────────────────────
  {
    path: 'klaim',
    canActivate: [authGuard, roleGuard(['ADMIN', 'PEMILIK'])],
    loadChildren: () =>
      import('./features/klaim/klaim.routes').then(m => m.klaimRoutes)
  },

  // ── Kunjungan Klien (Admin/Pemilik) ───────────────────────────
  {
    path: 'kunjungan',
    canActivate: [authGuard, roleGuard(['ADMIN', 'PEMILIK'])],
    loadChildren: () =>
      import('./features/kunjungan-klien/kunjungan-klien.routes').then(m => m.kunjunganKlienRoutes)
  },

  // ── Phase 7 — PEMILIK saja ────────────────────────────────────
  ...[
    'kehadiran/persetujuan-perangkat',
    'lembur/pengaturan',
    'izin/review-izin-jam',
    'cuti/pengaturan',
    'klaim/jenis',
    'kunjungan/visualisasi', 'kunjungan/ringkasan',
    'kunjungan/jadwal', 'kunjungan/sales-dasbor',
    'kunjungan/sales-produk', 'kunjungan/laporan-penjualan',
    'timesheet/aktivitas', 'timesheet/proyek',
    'broadcast',
    'gaji/hitung', 'gaji/pembayaran', 'gaji/laporan', 'gaji/pengaturan',
    'pengaturan/perusahaan', 'pengaturan/aplikasi-mobile', 'pengaturan/alur-persetujuan',
    'pengaturan/kalender-libur', 'pengaturan/langganan', 'pengaturan/admin',
    'pengaturan/fitur-premium', 'pengaturan/integrasi', 'pengaturan/panduan-penggunaan'
  ].map(p => ({
    path: p,
    canActivate: [authGuard, roleGuard(['PEMILIK'])],
    loadComponent: () =>
      import('./features/phase7/phase7.component').then(m => m.Phase7Component)
  })),

  // ── Halaman 403 Unauthorized ──────────────────────────────────
  {
    path: 'unauthorized',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/unauthorized/unauthorized.component').then(m => m.UnauthorizedComponent)
  },

  // ── Fallback ──────────────────────────────────────────────────
  { path: '**', redirectTo: '' }
];
