import {
  authGuard,
  roleGuard
} from "./chunk-XIKUNLV2.js";
import "./chunk-CR3SFDDN.js";
import "./chunk-OEINA6XM.js";
import "./chunk-QLIULQP5.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/karyawan/karyawan.routes.ts
var karyawanRoutes = [
  {
    path: "",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK"])],
    loadComponent: () => import("./chunk-I4ZACYMC.js").then((m) => m.KaryawanListComponent)
  },
  {
    path: "baru",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK"])],
    loadComponent: () => import("./chunk-MYG3IKR2.js").then((m) => m.KaryawanFormComponent)
  },
  {
    path: ":id",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK"])],
    loadComponent: () => import("./chunk-2JLFWCWU.js").then((m) => m.KaryawanDetailComponent)
  },
  {
    path: ":id/edit",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK"])],
    loadComponent: () => import("./chunk-MYG3IKR2.js").then((m) => m.KaryawanFormComponent)
  },
  {
    path: ":id/perangkat",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK"])],
    loadComponent: () => import("./chunk-JHN5WZQK.js").then((m) => m.KaryawanPerangkatComponent)
  },
  {
    path: ":id/jadwal-kerja",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK"])],
    loadComponent: () => import("./chunk-S7RU3DKL.js").then((m) => m.KaryawanJadwalKerjaComponent)
  },
  {
    path: ":id/kehadiran",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK"])],
    loadComponent: () => import("./chunk-LSEFXRNE.js").then((m) => m.KaryawanKehadiranComponent)
  },
  {
    path: ":id/lembur",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK"])],
    loadComponent: () => import("./chunk-V6EYNMYI.js").then((m) => m.KaryawanLemburComponent)
  },
  {
    path: ":id/izin",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK", "KARYAWAN"])],
    loadComponent: () => import("./chunk-R7LFOWE6.js").then((m) => m.KaryawanIzinComponent)
  },
  {
    path: ":id/cuti",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK", "KARYAWAN"])],
    loadComponent: () => import("./chunk-ZHV3LGFP.js").then((m) => m.KaryawanCutiComponent)
  },
  {
    path: ":id/dokumen",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK"])],
    loadComponent: () => import("./chunk-43MX4HY5.js").then((m) => m.KaryawanDokumenComponent)
  },
  {
    path: ":id/klaim",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK", "KARYAWAN"])],
    loadComponent: () => import("./chunk-7FUH253M.js").then((m) => m.KaryawanKlaimComponent)
  },
  {
    path: ":id/payroll",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK"])],
    loadComponent: () => import("./chunk-NG24RHTZ.js").then((m) => m.KaryawanPayrollComponent)
  },
  {
    path: ":id/surat-peringatan",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK"])],
    loadComponent: () => import("./chunk-BLGL6O5K.js").then((m) => m.KaryawanSuratPeringatanComponent)
  }
];
export {
  karyawanRoutes
};
//# sourceMappingURL=chunk-QF2Z6ZDW.js.map
