import { Routes } from '@angular/router';

export const laporanRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./laporan-list/laporan-list.component').then(m => m.LaporanListComponent)
  },
  {
    path: 'tidak-hadir-mingguan',
    loadComponent: () =>
      import('./tidak-hadir/tidak-hadir-list.component').then(m => m.TidakHadirListComponent)
  }
];

