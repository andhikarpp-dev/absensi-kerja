import { Routes } from '@angular/router';
import { authGuard } from '../../core/guards/auth.guard';
import { roleGuard } from '../../core/guards/role.guard';

export const polaKerjaRoutes: Routes = [
  {
    path: 'hari-kerja',
    canActivate: [authGuard, roleGuard(['PEMILIK', 'ADMIN'])],
    loadComponent: () =>
      import('./hari-kerja/hari-kerja-list.component').then(m => m.HariKerjaListComponent)
  },
  {
    path: 'shift',
    canActivate: [authGuard, roleGuard(['PEMILIK', 'ADMIN'])],
    loadComponent: () =>
      import('./shift/shift-list.component').then(m => m.ShiftListComponent)
  },
  {
    path: 'openshift',
    canActivate: [authGuard, roleGuard(['PEMILIK', 'ADMIN'])],
    loadComponent: () =>
      import('./openshift/openshift-list.component').then(m => m.OpenshiftListComponent)
  }
];
