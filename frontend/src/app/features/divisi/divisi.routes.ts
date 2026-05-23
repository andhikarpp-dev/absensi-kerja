import { Routes } from '@angular/router';
import { authGuard } from '../../core/guards/auth.guard';
import { roleGuard } from '../../core/guards/role.guard';

export const divisiRoutes: Routes = [
  {
    path: '',
    canActivate: [authGuard, roleGuard(['ADMIN','PEMILIK'])],
    loadComponent: () =>
      import('./divisi-list/divisi-list.component').then(m => m.DivisiListComponent)
  },
  {
    path: 'baru',
    canActivate: [authGuard, roleGuard(['ADMIN','PEMILIK'])],
    loadComponent: () =>
      import('./divisi-form/divisi-form.component').then(m => m.DivisiFormComponent)
  },
  {
    path: ':id/edit',
    canActivate: [authGuard, roleGuard(['ADMIN','PEMILIK'])],
    loadComponent: () =>
      import('./divisi-form/divisi-form.component').then(m => m.DivisiFormComponent)
  }
];
