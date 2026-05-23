import { Routes } from '@angular/router';
import { authGuard } from '../../core/guards/auth.guard';
import { roleGuard } from '../../core/guards/role.guard';

export const klaimRoutes: Routes = [
  {
    path: 'pengajuan',
    canActivate: [authGuard, roleGuard(['ADMIN', 'PEMILIK'])],
    loadComponent: () =>
      import('./klaim-pengajuan/klaim-pengajuan.component').then(m => m.KlaimPengajuanComponent)
  },
  {
    path: 'jenis',
    canActivate: [authGuard, roleGuard(['ADMIN', 'PEMILIK'])],
    loadComponent: () =>
      import('./klaim-jenis/klaim-jenis.component').then(m => m.KlaimJenisComponent)
  }
];
