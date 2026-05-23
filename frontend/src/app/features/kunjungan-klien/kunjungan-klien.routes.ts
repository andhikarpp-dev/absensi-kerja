import { Routes } from '@angular/router';
import { authGuard } from '../../core/guards/auth.guard';
import { roleGuard } from '../../core/guards/role.guard';

export const kunjunganKlienRoutes: Routes = [
  {
    path: 'kunjungan',
    canActivate: [authGuard, roleGuard(['ADMIN', 'PEMILIK'])],
    loadComponent: () =>
      import('./kunjungan/kunjungan.component').then(m => m.KunjunganComponent)
  },
  {
    path: 'klien',
    canActivate: [authGuard, roleGuard(['ADMIN', 'PEMILIK'])],
    loadComponent: () =>
      import('./klien/klien.component').then(m => m.KlienComponent)
  },
  {
    path: 'visualisasi',
    canActivate: [authGuard, roleGuard(['PEMILIK'])],
    loadComponent: () =>
      import('./visualisasi/visualisasi.component').then(m => m.VisualisasiComponent)
  }
];
