import { Routes } from '@angular/router';

export const izinRoutes: Routes = [
  {
    path: 'izin-hari',
    loadComponent: () =>
      import('./izin-hari/izin-hari.component').then(m => m.IzinHariComponent)
  },
  {
    path: 'review-izin-jam',
    loadComponent: () =>
      import('./review-izin-jam/review-izin-jam.component').then(m => m.ReviewIzinJamComponent)
  }
];
