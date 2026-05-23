import { Routes } from '@angular/router';

export const lokasiRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./lokasi-list/lokasi-list.component')
      .then(m => m.LokasiListComponent),
  },
  {
    path: 'baru',
    loadComponent: () => import('./lokasi-form/lokasi-form.component')
      .then(m => m.LokasiFormComponent),
  },
  {
    path: ':id/edit',
    loadComponent: () => import('./lokasi-form/lokasi-form.component')
      .then(m => m.LokasiFormComponent),
  },
];
