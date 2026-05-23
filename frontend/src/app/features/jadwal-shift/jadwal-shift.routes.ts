import { Routes } from '@angular/router';
import { authGuard } from '../../core/guards/auth.guard';
import { roleGuard } from '../../core/guards/role.guard';

export const jadwalShiftRoutes: Routes = [
  {
    path: '',
    canActivate: [authGuard, roleGuard(['ADMIN', 'PEMILIK'])],
    loadComponent: () =>
      import('./jadwal-shift-list/jadwal-shift-list.component').then(m => m.JadwalShiftListComponent)
  }
];
