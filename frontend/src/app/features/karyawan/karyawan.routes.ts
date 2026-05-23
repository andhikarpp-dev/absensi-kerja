import { Routes } from '@angular/router';
import { authGuard } from '../../core/guards/auth.guard';
import { roleGuard } from '../../core/guards/role.guard';

export const karyawanRoutes: Routes = [
  {
    path: '',
    canActivate: [authGuard, roleGuard(['ADMIN','PEMILIK'])],
    loadComponent: () =>
      import('./karyawan-list/karyawan-list.component').then(m => m.KaryawanListComponent)
  },
  {
    path: 'baru',
    canActivate: [authGuard, roleGuard(['ADMIN','PEMILIK'])],
    loadComponent: () =>
      import('./karyawan-form/karyawan-form.component').then(m => m.KaryawanFormComponent)
  },
  {
    path: ':id',
    canActivate: [authGuard, roleGuard(['ADMIN','PEMILIK'])],
    loadComponent: () =>
      import('./karyawan-detail/karyawan-detail.component').then(m => m.KaryawanDetailComponent)
  },
  {
    path: ':id/edit',
    canActivate: [authGuard, roleGuard(['ADMIN','PEMILIK'])],
    loadComponent: () =>
      import('./karyawan-form/karyawan-form.component').then(m => m.KaryawanFormComponent)
  },
  {
    path: ':id/perangkat',
    canActivate: [authGuard, roleGuard(['ADMIN','PEMILIK'])],
    loadComponent: () =>
      import('./karyawan-perangkat/karyawan-perangkat.component').then(m => m.KaryawanPerangkatComponent)
  },
  {
    path: ':id/jadwal-kerja',
    canActivate: [authGuard, roleGuard(['ADMIN','PEMILIK'])],
    loadComponent: () =>
      import('./karyawan-jadwal-kerja/karyawan-jadwal-kerja.component').then(m => m.KaryawanJadwalKerjaComponent)
  },
  {
    path: ':id/kehadiran',
    canActivate: [authGuard, roleGuard(['ADMIN','PEMILIK'])],
    loadComponent: () =>
      import('./karyawan-kehadiran/karyawan-kehadiran.component').then(m => m.KaryawanKehadiranComponent)
  },
  {
    path: ':id/lembur',
    canActivate: [authGuard, roleGuard(['ADMIN','PEMILIK'])],
    loadComponent: () =>
      import('./karyawan-lembur/karyawan-lembur.component').then(m => m.KaryawanLemburComponent)
  },
  {
    path: ':id/izin',
    canActivate: [authGuard, roleGuard(['ADMIN', 'PEMILIK', 'KARYAWAN'])],
    loadComponent: () =>
      import('./karyawan-izin/karyawan-izin.component').then(m => m.KaryawanIzinComponent)
  },
  {
    path: ':id/cuti',
    canActivate: [authGuard, roleGuard(['ADMIN', 'PEMILIK', 'KARYAWAN'])],
    loadComponent: () =>
      import('./karyawan-cuti/karyawan-cuti.component').then(m => m.KaryawanCutiComponent)
  },
  {
    path: ':id/dokumen',
    canActivate: [authGuard, roleGuard(['ADMIN', 'PEMILIK'])],
    loadComponent: () =>
      import('./karyawan-dokumen/karyawan-dokumen.component').then(m => m.KaryawanDokumenComponent)
  },
  {
    path: ':id/klaim',
    canActivate: [authGuard, roleGuard(['ADMIN', 'PEMILIK', 'KARYAWAN'])],
    loadComponent: () =>
      import('./karyawan-klaim/karyawan-klaim.component').then(m => m.KaryawanKlaimComponent)
  },
  {
    path: ':id/payroll',
    canActivate: [authGuard, roleGuard(['ADMIN', 'PEMILIK'])],
    loadComponent: () =>
      import('./karyawan-payroll/karyawan-payroll.component').then(m => m.KaryawanPayrollComponent)
  },
  {
    path: ':id/surat-peringatan',
    canActivate: [authGuard, roleGuard(['ADMIN', 'PEMILIK'])],
    loadComponent: () =>
      import('./karyawan-surat-peringatan/karyawan-surat-peringatan.component')
        .then(m => m.KaryawanSuratPeringatanComponent)
  }
];
