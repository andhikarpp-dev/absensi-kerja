export type JenisUpahOpenshift = 'SESUAI_LEMBUR' | 'NOMINAL';

/** DTO yang dikirim/diterima ke/dari backend (`/api/openshift`). */
export interface OpenshiftDTO {
  id: number;
  /** ISO LocalDateTime: "YYYY-MM-DDTHH:mm:ss" */
  jamMasuk: string;
  /** ISO LocalDateTime: "YYYY-MM-DDTHH:mm:ss" */
  jamKeluar: string;
  jenisUpah: JenisUpahOpenshift;
  upahPerJam: number;
  maksKaryawan: number | null;
  catatan: string | null;
  divisiIds: number[];
  createdAt?: string;
  updatedAt?: string;
}

export interface OpenshiftRequest {
  jamMasuk: string;       // "YYYY-MM-DDTHH:mm:ss"
  jamKeluar: string;
  jenisUpah: JenisUpahOpenshift;
  upahPerJam: number;
  maksKaryawan: number | null;
  catatan: string;
  divisiIds: number[];
}

export interface ImporOpenshiftResult {
  berhasil: number;
  gagal: number;
  errors: { baris: number; pesan: string }[];
}
