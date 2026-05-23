import { Routes } from '@angular/router';
import { authGuard } from '../../core/guards/auth.guard';
import { roleGuard } from '../../core/guards/role.guard';

export const jabatanRoutes: Routes = [
  {
    path: '',
    canActivate: [authGuard, roleGuard(['ADMIN','PEMILIK'])],
    loadComponent: () =>
      import('./jabatan-list/jabatan-list.component').then(m => m.JabatanListComponent)
  },
  {
    path: 'baru',
    canActivate: [authGuard, roleGuard(['ADMIN','PEMILIK'])],
    loadComponent: () =>
      import('./jabatan-form/jabatan-form.component').then(m => m.JabatanFormComponent)
  },
  {
    path: ':id/edit',
    canActivate: [authGuard, roleGuard(['ADMIN','PEMILIK'])],
    loadComponent: () =>
      import('./jabatan-form/jabatan-form.component').then(m => m.JabatanFormComponent)
  }
];
