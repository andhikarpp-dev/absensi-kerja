import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Absensi, CheckOutRequest, RingkasanKehadiran, RingkasanKehadiranRow } from '../models/absensi.model';

@Injectable({ providedIn: 'root' })
export class AbsensiService {
  private http = inject(HttpClient);
  private url  = `${environment.apiUrl}/absensi`;

  /** Status absensi hari ini */
  getHariIni(): Observable<Absensi> {
    return this.http.get<{ absensi: Absensi }>(`${this.url}/hari-ini`).pipe(
      map(d => d.absensi)
    );
  }

  /** Riwayat absensi per bulan */
  getRiwayat(bulan: number, tahun: number): Observable<Absensi[]> {
    return this.http.get<{ absensi: Absensi[] }>(
      `${this.url}/riwayat?bulan=${bulan}&tahun=${tahun}`
    ).pipe(map(d => d.absensi ?? []));
  }

  /** Check-in dengan foto (multipart) + info perangkat browser + lokasi */
  checkIn(catatan?: string, foto?: File, lat?: number, lng?: number): Observable<Absensi> {
    const fd = new FormData();
    if (catatan) fd.append('catatan', catatan);
    if (foto)    fd.append('foto', foto, foto.name);
    if (lat != null) fd.append('lat', lat.toString());
    if (lng != null) fd.append('lng', lng.toString());

    // Kumpulkan info perangkat dari browser
    const deviceInfo = this.getDeviceInfo();
    fd.append('deviceId',       deviceInfo.deviceId);
    fd.append('namaPerangkat',  deviceInfo.namaPerangkat);
    fd.append('modelPerangkat', deviceInfo.modelPerangkat);
    fd.append('manufaktur',     deviceInfo.manufaktur);
    fd.append('platform',       deviceInfo.platform);

    return this.http.post<{ absensi: Absensi }>(`${this.url}/check-in`, fd).pipe(
      map(d => d.absensi)
    );
  }

  /** Ringkasan kehadiran karyawan tertentu (admin) */
  getRingkasanByKaryawan(karyawanId: number, bulan: number, tahun: number): Observable<RingkasanKehadiran> {
    return this.http.get<{ ringkasan: RingkasanKehadiran }>(
      `${this.url}/admin/karyawan/${karyawanId}/ringkasan?bulan=${bulan}&tahun=${tahun}`
    ).pipe(map(d => d.ringkasan));
  }

  /** Ambil info perangkat dari User-Agent browser */
  private getDeviceInfo(): { deviceId: string; namaPerangkat: string; modelPerangkat: string; manufaktur: string; platform: string } {
    const ua = navigator.userAgent;

    let manufaktur    = 'Unknown';
    let modelPerangkat = 'Unknown';
    let namaPerangkat  = 'Browser';
    let osPlatform     = 'Web';

    // ── Android (HP/Tablet) ── bisa dapat nama model asli
    if (/Android/i.test(ua)) {
      const androidVer = (ua.match(/Android ([0-9.]+)/) || [])[1] || '';
      const modelMatch = ua.match(/Android [0-9.]+;\s*([^)]+)/);
      const model      = modelMatch ? modelMatch[1].trim() : 'Android Device';
      // Hapus trailing "; Build/..." jika ada
      const cleanModel = model.replace(/\s*Build\/.*$/, '').trim();
      namaPerangkat  = cleanModel;
      modelPerangkat = cleanModel;
      manufaktur     = cleanModel.split(' ')[0].toUpperCase();
      osPlatform     = `Android ${androidVer}`.trim();

    // ── iPhone ──
    } else if (/iPhone/i.test(ua)) {
      const iosVer = (ua.match(/OS ([0-9_]+) like/) || [])[1]?.replace(/_/g, '.') || '';
      namaPerangkat  = 'iPhone';
      modelPerangkat = 'iPhone';
      manufaktur     = 'APPLE';
      osPlatform     = `iOS ${iosVer}`.trim();

    // ── iPad ──
    } else if (/iPad/i.test(ua)) {
      const iosVer = (ua.match(/OS ([0-9_]+) like/) || [])[1]?.replace(/_/g, '.') || '';
      namaPerangkat  = 'iPad';
      modelPerangkat = 'iPad';
      manufaktur     = 'APPLE';
      osPlatform     = `iPadOS ${iosVer}`.trim();

    // ── Windows PC ── deteksi versi + browser
    } else if (/Windows/i.test(ua)) {
      // Versi Windows dari NT version
      const ntVer = (ua.match(/Windows NT ([0-9.]+)/) || [])[1] || '';
      const winVersion: Record<string, string> = {
        '10.0': '10/11', '6.3': '8.1', '6.2': '8', '6.1': '7', '6.0': 'Vista'
      };
      const winLabel = winVersion[ntVer] ? `Windows ${winVersion[ntVer]}` : 'Windows';

      // Nama browser
      const browser = this.detectBrowser(ua);

      namaPerangkat  = `${winLabel} — ${browser}`;
      modelPerangkat = winLabel;
      manufaktur     = 'WINDOWS';
      osPlatform     = winLabel;

    // ── macOS ──
    } else if (/Macintosh|MacIntel/i.test(ua)) {
      const macVer = (ua.match(/Mac OS X ([0-9_]+)/) || [])[1]?.replace(/_/g, '.') || '';
      const browser = this.detectBrowser(ua);
      namaPerangkat  = `macOS ${macVer} — ${browser}`.trim();
      modelPerangkat = `macOS ${macVer}`.trim();
      manufaktur     = 'APPLE';
      osPlatform     = `macOS ${macVer}`.trim();

    // ── Linux ──
    } else if (/Linux/i.test(ua)) {
      const browser = this.detectBrowser(ua);
      namaPerangkat  = `Linux — ${browser}`;
      modelPerangkat = 'Linux';
      manufaktur     = 'LINUX';
      osPlatform     = 'Linux';
    }

    // Buat deviceId unik per browser (simpan di localStorage)
    let deviceId = localStorage.getItem('_absensi_device_id');
    if (!deviceId) {
      deviceId = 'web-' + Math.random().toString(36).substring(2, 10) + '-' + Date.now().toString(36);
      localStorage.setItem('_absensi_device_id', deviceId);
    }

    return { deviceId, namaPerangkat, modelPerangkat, manufaktur, platform: osPlatform };
  }

  /** Deteksi nama browser dari User-Agent */
  private detectBrowser(ua: string): string {
    if (/Edg\//i.test(ua))     return 'Microsoft Edge';
    if (/OPR\//i.test(ua))     return 'Opera';
    if (/Brave\//i.test(ua))   return 'Brave';
    if (/Chrome\//i.test(ua))  return 'Chrome';
    if (/Firefox\//i.test(ua)) return 'Firefox';
    if (/Safari\//i.test(ua))  return 'Safari';
    return 'Browser';
  }

  /** Check-out */
  checkOut(catatan?: string, lat?: number, lng?: number): Observable<Absensi> {
    const req: CheckOutRequest = { catatan, lat, lng };
    return this.http.post<{ absensi: Absensi }>(`${this.url}/check-out`, req).pipe(
      map(d => d.absensi)
    );
  }

  // ── Admin endpoints ──────────────────────────────────────
  /** Kehadiran semua karyawan pada tanggal tertentu (admin) */
  getKehadiranHarian(tanggal: string): Observable<Absensi[]> {
    return this.http.get<{ absensi: Absensi[] }>(
      `${this.url}/admin/harian?tanggal=${tanggal}`
    ).pipe(map(d => d.absensi ?? []));
  }

  /** Riwayat absensi karyawan tertentu (admin) */
  getRiwayatByKaryawan(karyawanId: number, bulan: number, tahun: number): Observable<Absensi[]> {
    return this.http.get<{ absensi: Absensi[] }>(
      `${this.url}/admin/karyawan/${karyawanId}?bulan=${bulan}&tahun=${tahun}`
    ).pipe(map(d => d.absensi ?? []));
  }

  /** Tambah presensi manual (admin) */
  tambahManual(karyawanId: number, params: {
    tanggal: string;
    tipePresensi: string;
    waktuMulai?: string;
    waktuSelesai?: string;
    catatan?: string;
  }): Observable<Absensi> {
    const p = new URLSearchParams();
    p.set('tanggal',      params.tanggal);
    p.set('tipePresensi', params.tipePresensi);
    if (params.waktuMulai)  p.set('waktuMulai',  params.waktuMulai);
    if (params.waktuSelesai) p.set('waktuSelesai', params.waktuSelesai);
    if (params.catatan)     p.set('catatan',      params.catatan);
    return this.http.post<{ absensi: Absensi }>(
      `${this.url}/admin/karyawan/${karyawanId}/tambah?${p.toString()}`, {}
    ).pipe(map(d => d.absensi));
  }

  /** Batalkan presensi — admin (DELETE) */
  batalkanPresensi(absensiId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/admin/${absensiId}`);
  }

  /** Ubah waktu presensi — admin (PUT) */
  ubahWaktuPresensi(absensiId: number, jamMasuk?: string, jamKeluar?: string): Observable<Absensi> {
    const p = new URLSearchParams();
    if (jamMasuk  != null) p.set('jamMasuk',  jamMasuk);
    if (jamKeluar != null) p.set('jamKeluar', jamKeluar);
    return this.http.put<{ absensi: Absensi }>(
      `${this.url}/admin/${absensiId}/waktu?${p.toString()}`, {}
    ).pipe(map(d => d.absensi));
  }

  /** Ringkasan kehadiran semua karyawan (admin) */
  getRingkasanSemua(params: {    dari?: string; sampai?: string; divisiId?: number; cari?: string;
  }): Observable<RingkasanKehadiranRow[]> {
    const p = new URLSearchParams();
    if (params.dari)     p.set('dari',     params.dari);
    if (params.sampai)   p.set('sampai',   params.sampai);
    if (params.divisiId) p.set('divisiId', params.divisiId.toString());
    if (params.cari)     p.set('cari',     params.cari);
    return this.http.get<{ ringkasan: RingkasanKehadiranRow[] }>(
      `${this.url}/admin/ringkasan?${p.toString()}`
    ).pipe(map(d => d.ringkasan ?? []));
  }

  // ── Review Kehadiran ──────────────────────────────────────

  /** Daftar presensi perlu dicek */
  getReviewPerluDicek(divisiId?: number, cari?: string): Observable<Absensi[]> {
    const p = new URLSearchParams();
    if (divisiId) p.set('divisiId', divisiId.toString());
    if (cari)     p.set('cari', cari);
    return this.http.get<{ absensi: Absensi[] }>(
      `${this.url}/admin/review/perlu-dicek?${p.toString()}`
    ).pipe(map(d => d.absensi ?? []));
  }

  /** Daftar presensi sudah dicek */
  getReviewSudahDicek(divisiId?: number, cari?: string): Observable<Absensi[]> {
    const p = new URLSearchParams();
    if (divisiId) p.set('divisiId', divisiId.toString());
    if (cari)     p.set('cari', cari);
    return this.http.get<{ absensi: Absensi[] }>(
      `${this.url}/admin/review/sudah-dicek?${p.toString()}`
    ).pipe(map(d => d.absensi ?? []));
  }

  /** Tandai satu presensi sudah dicek */
  tandaiSudahDicek(absensiId: number): Observable<Absensi> {
    return this.http.patch<{ absensi: Absensi }>(
      `${this.url}/admin/review/${absensiId}/tandai-dicek`, {}
    ).pipe(map(d => d.absensi));
  }

  /** Tandai semua presensi perlu dicek sebagai sudah dicek */
  tandaiSemuaSudahDicek(divisiId?: number): Observable<{ count: number }> {
    const p = new URLSearchParams();
    if (divisiId) p.set('divisiId', divisiId.toString());
    return this.http.patch<{ count: number }>(
      `${this.url}/admin/review/tandai-semua-dicek?${p.toString()}`, {}
    );
  }

  /** Ekspor Excel tanggal tertentu — download file langsung */
  eksporHarian(params: {
    tanggal: string;
    divisiId?: string;
    lokasiId?: string;
    karyawanId?: number;
    format?: string;
    kolom?: string[];
  }): Observable<Blob> {
    const p = new URLSearchParams();
    p.set('tanggal', params.tanggal);
    if (params.divisiId)   p.set('divisiId',   params.divisiId);
    if (params.lokasiId)   p.set('lokasiId',   params.lokasiId);
    if (params.karyawanId) p.set('karyawanId', params.karyawanId.toString());
    if (params.format)     p.set('format',     params.format);
    if (params.kolom?.length) params.kolom.forEach(k => p.append('kolom', k));
    return this.http.get(`${this.url}/admin/ekspor/harian?${p.toString()}`, {
      responseType: 'blob'
    });
  }

  /** Ekspor Excel rentang waktu — download file langsung */
  eksporRentang(params: {
    dari: string;
    sampai: string;
    divisiId?: string;
    karyawanId?: number;
    format?: string;
    kolom?: string[];
  }): Observable<Blob> {
    const p = new URLSearchParams();
    p.set('dari',    params.dari);
    p.set('sampai',  params.sampai);
    if (params.divisiId)   p.set('divisiId',   params.divisiId);
    if (params.karyawanId) p.set('karyawanId', params.karyawanId.toString());
    if (params.format)     p.set('format',     params.format);
    if (params.kolom?.length) params.kolom.forEach(k => p.append('kolom', k));
    return this.http.get(`${this.url}/admin/ekspor/rentang?${p.toString()}`, {
      responseType: 'blob'
    });
  }
}
