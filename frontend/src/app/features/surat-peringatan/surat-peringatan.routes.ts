import { Routes } from '@angular/router';
import { authGuard } from '../../core/guards/auth.guard';
import { roleGuard } from '../../core/guards/role.guard';

export const suratPeringatanRoutes: Routes = [
  {
    path: '',
    canActivate: [authGuard, roleGuard(['ADMIN', 'PEMILIK'])],
    loadComponent: () =>
      import('./surat-peringatan-list/surat-peringatan-list.component')
        .then(m => m.SuratPeringatanListComponent),
  },
];
