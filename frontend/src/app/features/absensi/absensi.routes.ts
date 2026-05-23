import { Routes } from '@angular/router';

export const absensiRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./check-in-out/check-in-out.component').then(m => m.CheckInOutComponent)
  }
];

