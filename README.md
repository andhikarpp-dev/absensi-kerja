# Fitur: Laporan Tidak Hadir 1 Minggu

Menampilkan daftar karyawan yang **tidak tercatat melakukan absensi sama sekali** dalam rentang waktu tertentu (default: 7 hari terakhir).

---

## Alur Kerja

```
User buka halaman
      │
      ▼
GET /api/laporan/tidak-hadir-mingguan?days=7
      │
      ▼
[Backend] Ambil semua karyawan aktif (scope per perusahaan)
      │
      ▼
[Backend] Query ID karyawan yang ADA absensinya dalam rentang tanggal
      │
      ▼
[Backend] Selisih = karyawan yang tidak hadir sama sekali
      │
      ▼
Frontend tampilkan daftar karyawan + info periode
```

---

## Struktur File

```
tidak-hadir/
├── tidak-hadir-list.component.ts   # Komponen utama (Angular standalone)
├── tidak-hadir-list.component.html # Template HTML tampilan daftar karyawan
│
backend/
├── controller/
│   └── TidakHadirMingguanController.java   # Endpoint GET
├── service/
│   └── KaryawanService.java                # findAll() by perusahaan
├── repository/
│   └── AbsensiRepository.java              # findKaryawanIdsHadirBetween()
```

---

## Endpoint

```
GET /api/laporan/tidak-hadir-mingguan?days={n}
```

| Parameter | Tipe  | Default | Keterangan                        |
|-----------|-------|---------|-----------------------------------|
| `days`    | `int` | `7`     | Jumlah hari ke belakang dari hari ini |

### Contoh Response

```json
{
  "status": "success",
  "data": {
    "dari": "2026-05-17",
    "sampai": "2026-05-23",
    "days": 7,
    "total": 3,
    "karyawan": [
      {
        "id": 12,
        "namaLengkap": "Andi Pratama",
        "nip": "NIP-P2-001",
        "namaDivisi": "Teknologi Informasi",
        "namaJabatan": "Staff",
        "noTelepon": "08123456789",
        "fotoProfil": null
      }
    ]
  }
}
```

---

## Logika Backend

```java
// TidakHadirMingguanController.java

LocalDate sampai = LocalDate.now();
LocalDate dari   = sampai.minusDays(days - 1L);

// 1. Semua karyawan dalam scope perusahaan
List<KaryawanDTO> semuaKaryawan = karyawanService.findAll(ownerId);

// 2. Karyawan yang SUDAH absen dalam rentang
Set<Long> idHadir = new HashSet<>(
    absensiRepository.findKaryawanIdsHadirBetween(dari, sampai));

// 3. Selisih = tidak hadir
List<KaryawanDTO> tidakHadir = semuaKaryawan.stream()
    .filter(k -> !idHadir.contains(k.getId()))
    .collect(Collectors.toList());
```

---

## Hak Akses

| Role      | Scope data                                      |
|-----------|-------------------------------------------------|
| `PEMILIK` | Hanya karyawan milik perusahaannya sendiri      |
| `ADMIN`   | Semua karyawan (lintas perusahaan)              |
| `KARYAWAN`| ❌ Tidak bisa mengakses halaman ini             |

---

## Testing Data

Untuk menguji fitur ini, insert karyawan tanpa data absensi ke database:

```sql
-- Insert karyawan baru tanpa record absensi
-- Karyawan ini otomatis muncul di laporan tidak hadir
INSERT INTO karyawan (nama_lengkap, nip, jenis_kelamin, zona_waktu, status_kerja, perusahaan_id, divisi_id, jabatan_id)
VALUES ('Test Karyawan', 'NIP-TEST-001', 'LAKI_LAKI', 'WIB', 'AKTIF', 2,
  (SELECT id FROM divisi  WHERE nama_divisi  = 'Operasional' AND perusahaan_id = 2 LIMIT 1),
  (SELECT id FROM jabatan WHERE nama_jabatan = 'Staff'       AND perusahaan_id = 2 LIMIT 1));
```

---

## Catatan Teknis

- Data bersifat **real-time**, tidak ada cache — setiap request langsung ke database.
- Karyawan dengan `status_kerja = 'NONAKTIF'` tetap muncul jika belum difilter di `KaryawanService.findAll()`.
- Rentang hari bisa diubah melalui input di UI (1–30 hari).
