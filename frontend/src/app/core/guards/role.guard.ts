import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';

type Role = User['role'];

/**
 * Guard berbasis role.
 * Contoh: canActivate: [authGuard, roleGuard(['ADMIN','PEMILIK'])]
 */
export const roleGuard = (allowedRoles: Role | Role[]): CanActivateFn => {
  return () => {
    const auth   = inject(AuthService);
    const router = inject(Router);
    const user   = auth.currentUser();

    const roles: Role[] = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];

    if (user && roles.includes(user.role)) {
      return true;
    }
    // Sudah login tapi role tidak sesuai
    if (user) {
      // KARYAWAN → langsung ke halaman absensi
      if (user.role === 'KARYAWAN') {
        return router.createUrlTree(['/absensi']);
      }
      // Role lain yang tidak punya akses → halaman 403
      return router.createUrlTree(['/unauthorized']);
    }
    // Belum login → ke login
    return router.createUrlTree(['/auth/login']);
  };
};
