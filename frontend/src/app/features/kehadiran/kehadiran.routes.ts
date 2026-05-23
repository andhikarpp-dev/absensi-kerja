import { Routes } from '@angular/router';

export const kehadiranRoutes: Routes = [
  {
    path: 'harian',
    loadComponent: () =>
      import('./harian/kehadiran-harian.component').then(m => m.KehadiranHarianComponent)
  },
  {
    path: 'ringkasan',
    loadComponent: () =>
      import('./ringkasan/ringkasan-kehadiran.component').then(m => m.RingkasanKehadiranComponent)
  },
  {
    path: 'review',
    loadComponent: () =>
      import('./review/review-kehadiran.component').then(m => m.ReviewKehadiranComponent)
  },
  {
    path: 'revisi',
    loadComponent: () =>
      import('./revisi/revisi-kehadiran.component').then(m => m.RevisiKehadiranComponent)
  },
  {
    path: 'persetujuan-presensi',
    loadComponent: () =>
      import('./persetujuan-presensi/persetujuan-presensi.component').then(m => m.PersetujuanPresensiComponent)
  },
  {
    path: 'persetujuan-foto-profil',
    loadComponent: () =>
      import('./persetujuan-foto-profil/persetujuan-foto-profil.component').then(m => m.PersetujuanFotoProfilComponent)
  },
  {
    path: 'rekap-tukar-jadwal-shift',
    loadComponent: () =>
      import('./rekap-tukar-jadwal-shift/rekap-tukar-jadwal-shift.component').then(m => m.RekapTukarJadwalShiftComponent)
  },
  {
    path: 'rekap-catatan-presensi',
    loadComponent: () =>
      import('./rekap-catatan-presensi/rekap-catatan-presensi.component').then(m => m.RekapCatatanPresensiComponent)
  }
];
