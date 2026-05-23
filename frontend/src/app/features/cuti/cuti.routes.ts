import { Routes } from '@angular/router';
import { authGuard } from '../../core/guards/auth.guard';
import { roleGuard } from '../../core/guards/role.guard';

export const cutiRoutes: Routes = [
  {
    path: '',
    canActivate: [authGuard, roleGuard(['ADMIN', 'PEMILIK'])],
    loadComponent: () =>
      import('./cuti-admin/cuti-admin.component').then(m => m.CutiAdminComponent)
  },
  {
    path: 'laporan',
    canActivate: [authGuard, roleGuard(['ADMIN', 'PEMILIK'])],
    loadComponent: () =>
      import('./cuti-laporan/cuti-laporan.component').then(m => m.CutiLaporanComponent)
  },
  {
    path: 'pengaturan',
    canActivate: [authGuard, roleGuard(['ADMIN', 'PEMILIK'])],
    loadComponent: () =>
      import('./cuti-pengaturan/cuti-pengaturan.component').then(m => m.CutiPengaturanComponent)
  }
];
