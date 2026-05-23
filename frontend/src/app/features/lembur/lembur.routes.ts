import { Routes } from '@angular/router';

export const lemburRoutes: Routes = [
  {
    path: 'review',
    loadComponent: () =>
      import('./review-lembur/review-lembur.component').then(m => m.ReviewLemburComponent)
  },
  {
    path: 'jadwal',
    loadComponent: () =>
      import('./jadwal-lembur/jadwal-lembur.component').then(m => m.JadwalLemburComponent)
  },
  {
    path: 'pengaturan',
    loadComponent: () =>
      import('./pengaturan-lembur/pengaturan-lembur.component').then(m => m.PengaturanLemburComponent)
  }
];
