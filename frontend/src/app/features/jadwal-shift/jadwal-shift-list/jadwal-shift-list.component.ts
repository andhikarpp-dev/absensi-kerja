import { Component, OnInit, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { JadwalShiftService, ImporJadwalShiftResult } from '../../../core/services/jadwal-shift.service';
import { DivisiService } from '../../../core/services/divisi.service';
import { PolaKerjaService } from '../../../core/services/pola-kerja.service';
import {
  JadwalShift,
  JadwalShiftBatchRequest,
  JadwalShiftMatrix,
  KaryawanShift,
  StatusJadwalShift,
} from '../../../core/models/jadwal-shift.model';
import { Divisi } from '../../../core/models/divisi.model';
import { HARI_LIST, PolaKerja, PolaKerjaRequest } from '../../../core/models/pola-kerja.model';
import { environment } from '../../../../environments/environment';

interface CellKey { karyawanId: number; tanggal: string; }

/** Form Tambah/Edit Jadwal — sesuai layout "Tambah Pola Kerja". */
interface ShiftFormState {
  namaPolaKerja: string;
  toleransi: number;
  catatan: string;       // → JadwalShift.keterangan
  warna: string;
  jamMasuk: string;
  jamKeluar: string;
  mulaiIstirahat: string;
  selesaiIstirahat: string;
  maksMenitIstirahat: number;
  status: StatusJadwalShift;
}

@Component({
  selector: 'app-jadwal-shift-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent],
  templateUrl: './jadwal-shift-list.component.html',
  styleUrl: './jadwal-shift-list.component.scss'
})
export class JadwalShiftListComponent implements OnInit {
  private svc           = inject(JadwalShiftService);
  private divisiSvc     = inject(DivisiService);
  private polaKerjaSvc  = inject(PolaKerjaService);

  // Filter
  bulan         = signal<string>(this.toMonthString(new Date()));
  divisiFilter  = signal<number | null>(null);
  search        = signal<string>('');

  /** Tanggal Senin minggu yang sedang dilihat di tabel (YYYY-MM-DD). */
  weekStart     = signal<string>(this.toDateString(this.startOfWeek(new Date())));

  /** 7 tanggal Senin–Minggu untuk header tabel. */
  weekDates = computed<string[]>(() => {
    const ws = this.weekStart();
    if (!ws) return [];
    const out: string[] = [];
    const start = this.parseDate(ws);
    for (let i = 0; i < 7; i++) {
      const d = new Date(start); d.setDate(start.getDate() + i);
      out.push(this.toDateString(d));
    }
    return out;
  });

  /** Label rentang minggu untuk header. */
  weekRangeLabel = computed<string>(() => {
    const dates = this.weekDates();
    if (dates.length === 0) return '';
    return `${this.formatHariTanggal(this.parseDate(dates[0]))} - ${this.formatHariTanggal(this.parseDate(dates[6]))}`;
  });

  loading       = signal<boolean>(false);
  error         = signal<string>('');

  matrix        = signal<JadwalShiftMatrix | null>(null);
  divisiList    = signal<Divisi[]>([]);

  // Quick lookup: "karyawanId|YYYY-MM-DD" -> assignment
  assignmentMap = computed<Record<string, JadwalShift>>(() => {
    const m: Record<string, JadwalShift> = {};
    const mx = this.matrix();
    if (mx) for (const a of mx.assignments) m[`${a.karyawanId}|${a.tanggal}`] = a;
    return m;
  });

  shiftDivisi = computed<Divisi[]>(() =>
    this.divisiList().filter(d => d.sistemKerja === 'SHIFT')
  );

  // Selected cells (for bulk actions) — fitur Assign sudah dihapus.

  /** Karyawan-karyawan yang aktif "ulang jadwal tiap minggu". */
  repeatingKaryawan  = signal<Set<number>>(new Set());
  /** Karyawan yang sedang diproses (loading spinner pada baris). */
  processingKaryawan = signal<Set<number>>(new Set());

  // Impor Excel modal
  showImporModal   = signal<boolean>(false);
  imporFile        = signal<File | null>(null);
  imporUploading   = signal<boolean>(false);
  imporResult      = signal<ImporJadwalShiftResult | null>(null);

  // Ekspor Excel
  exporting        = signal<boolean>(false);
  showEksporModal  = signal<boolean>(false);
  eksporDivisiId   = signal<number | null>(null);
  eksporBulan      = signal<number>(new Date().getMonth() + 1); // 1..12
  eksporTahun      = signal<number>(new Date().getFullYear());

  /** Daftar tahun untuk select Tahun (5 tahun ke belakang & 5 ke depan). */
  eksporTahunList = computed<number[]>(() => {
    const y = new Date().getFullYear();
    const list: number[] = [];
    for (let i = y - 5; i <= y + 5; i++) list.push(i);
    return list;
  });

  /** Daftar nama bulan ID untuk select Bulan. */
  bulanNamaList: { value: number; label: string }[] = [
    { value: 1,  label: 'Januari'   }, { value: 2,  label: 'Februari'  },
    { value: 3,  label: 'Maret'     }, { value: 4,  label: 'April'     },
    { value: 5,  label: 'Mei'       }, { value: 6,  label: 'Juni'      },
    { value: 7,  label: 'Juli'      }, { value: 8,  label: 'Agustus'   },
    { value: 9,  label: 'September' }, { value: 10, label: 'Oktober'   },
    { value: 11, label: 'November'  }, { value: 12, label: 'Desember'  },
  ];

  /** Jumlah karyawan target ekspor sesuai filter divisi yg dipilih di modal. */
  eksporTargetCount = computed<number>(() => {
    const mx = this.matrix();
    if (!mx) return 0;
    const did = this.eksporDivisiId();
    if (did == null) return mx.karyawan.length;
    return mx.karyawan.filter(k => k.divisiId === did).length;
  });

  // Modal state
  showEditor    = signal<boolean>(false);
  editorCells   = signal<CellKey[]>([]);
  editorForm    = signal<ShiftFormState>(this.emptyForm());
  editorSaving  = signal<boolean>(false);
  /** Bila true, sel saat ini sudah punya assignment (mode edit). */
  editorIsEdit  = signal<boolean>(false);

  private emptyForm(): ShiftFormState {
    return {
      namaPolaKerja: '',
      toleransi: 0,
      catatan: '',
      warna: '#000000',
      jamMasuk: '',
      jamKeluar: '',
      mulaiIstirahat: '',
      selesaiIstirahat: '',
      maksMenitIstirahat: 60,
      status: 'AKTIF'
    };
  }

  // Ulang Jadwal Massal modal
  showBulkModal    = signal<boolean>(false);
  bulkDivisiId     = signal<number | null>(null);
  /** Tanggal awal minggu sumber (Senin), format YYYY-MM-DD */
  bulkWeekStart    = signal<string>('');
  /** Bila true, ulang jadwal minggu sumber ke setiap minggu berikutnya pada bulan ini. */
  bulkRepeatWeekly = signal<boolean>(true);
  bulkSaving       = signal<boolean>(false);

  /** Jumlah karyawan yang akan terkena dampak Ulang Jadwal Massal. */
  bulkTargetCount = computed<number>(() => {
    const list = this.matrix()?.karyawan || [];
    const did = this.bulkDivisiId();
    if (did == null) return list.length;
    return list.filter(k => k.divisiId === did).length;
  });

  /** Label rentang minggu, contoh: "Senin, 27 Apr 2026 - Minggu, 03 Mei 2026" */
  bulkWeekLabel = computed<string>(() => {
    const ws = this.bulkWeekStart();
    if (!ws) return '';
    const start = this.parseDate(ws);
    const end   = new Date(start); end.setDate(start.getDate() + 6);
    return `${this.formatHariTanggal(start)} - ${this.formatHariTanggal(end)}`;
  });

  constructor() {
    effect(() => {
      // refetch when filters change
      this.bulan(); this.divisiFilter(); this.search();
      this.loadMatrix();
    });
  }

  ngOnInit(): void {
    this.divisiSvc.findAll().subscribe(list => this.divisiList.set(list || []));
  }

  // ── Loading ─────────────────────────────────────────────
  loadMatrix(): void {
    this.loading.set(true);
    this.error.set('');
    this.svc.getMatrix(this.bulan(), this.divisiFilter(), this.search() || null).subscribe({
      next: m => { this.matrix.set(m); this.loading.set(false); },
      error: e => {
        console.error(e);
        this.error.set(e?.message || 'Gagal memuat jadwal shift');
        this.loading.set(false);
      }
    });
  }

  // ── Navigation: prev / next month ───────────────────────
  prevMonth(): void { this.shiftMonth(-1); }
  nextMonth(): void { this.shiftMonth(1); }
  private shiftMonth(delta: number): void {
    const [y, m] = this.bulan().split('-').map(Number);
    const d = new Date(y, m - 1 + delta, 1);
    this.bulan.set(this.toMonthString(d));
    // sinkronkan minggu yang dilihat ke Senin pertama bulan tersebut
    this.weekStart.set(this.toDateString(this.startOfWeek(d)));
  }

  // ── Navigation: prev / next week ────────────────────────
  prevWeek(): void { this.shiftWeek(-7); }
  nextWeek(): void { this.shiftWeek(7); }
  private shiftWeek(deltaDays: number): void {
    const ws = this.weekStart();
    if (!ws) return;
    const d = this.parseDate(ws);
    d.setDate(d.getDate() + deltaDays);
    this.weekStart.set(this.toDateString(d));
    // bila minggu pindah ke bulan lain, ambil ulang matrix bulan tsb
    const newMonth = this.toMonthString(d);
    if (newMonth !== this.bulan()) this.bulan.set(newMonth);
  }

  // ── Cell key (untuk lookup assignmentMap) ───────────────
  cellKey(karyawanId: number, tanggal: string): string { return `${karyawanId}|${tanggal}`; }

  // ── Repeat weekly per karyawan ──────────────────────────
  isRepeating(karyawanId: number): boolean { return this.repeatingKaryawan().has(karyawanId); }
  isProcessing(karyawanId: number): boolean { return this.processingKaryawan().has(karyawanId); }

  toggleRepeatWeekly(karyawanId: number, checked: boolean): void {
    const next = new Set(this.repeatingKaryawan());
    if (checked) next.add(karyawanId); else next.delete(karyawanId);
    this.repeatingKaryawan.set(next);
    if (checked) this.applyRepeatWeekly(karyawanId);
  }

  /** Salin jadwal minggu yang sedang dilihat ke semua minggu berikutnya pada bulan yang sama. */
  private applyRepeatWeekly(karyawanId: number): void {
    const ws = this.weekStart();
    if (!ws) return;
    const sourceStart = this.parseDate(ws);
    const lastDay = new Date(sourceStart.getFullYear(), sourceStart.getMonth() + 1, 0);

    const targetWeeks: Date[] = [];
    let cursor = new Date(sourceStart); cursor.setDate(cursor.getDate() + 7);
    while (cursor <= lastDay) {
      targetWeeks.push(new Date(cursor));
      cursor.setDate(cursor.getDate() + 7);
    }
    if (targetWeeks.length === 0) return;

    // tandai loading
    const proc = new Set(this.processingKaryawan()); proc.add(karyawanId);
    this.processingKaryawan.set(proc);

    let pending = targetWeeks.length;
    const finish = () => {
      const p = new Set(this.processingKaryawan()); p.delete(karyawanId);
      this.processingKaryawan.set(p);
      this.loadMatrix();
    };

    for (const w of targetWeeks) {
      this.svc.copyWeek({
        sourceWeekStart: ws,
        targetWeekStart: this.toDateString(w),
        karyawanIds: [karyawanId],
        overwrite: true
      }).subscribe({
        next: () => { if (--pending === 0) finish(); },
        error: (e) => {
          console.error(e);
          if (--pending === 0) finish();
        }
      });
    }
  }

  // ── Quick assign via dropdown sel ────────────────────────
  quickAssignShift(karyawanId: number, tanggal: string, polaKerjaId: number | null): void {
    if (!polaKerjaId) return;
    const opts = this.matrix()?.shiftOptions || [];
    const pola = opts.find(p => p.id === polaKerjaId) || null;
    const hari = pola?.hariList?.[0];

    const proc = new Set(this.processingKaryawan()); proc.add(karyawanId);
    this.processingKaryawan.set(proc);

    this.svc.upsert({
      karyawanId,
      tanggal,
      polaKerjaId,
      jamMasuk:  hari?.jamMasuk ?? null,
      jamKeluar: hari?.jamKeluar ?? null,
      status: 'AKTIF',
      keterangan: null,
      warna: null
    }).subscribe({
      next: () => {
        const p = new Set(this.processingKaryawan()); p.delete(karyawanId);
        this.processingKaryawan.set(p);
        this.loadMatrix();
        // bila baris ini tandai "ulang tiap minggu", terapkan ulang
        if (this.isRepeating(karyawanId)) {
          // tunggu matrix reload lalu apply
          setTimeout(() => this.applyRepeatWeekly(karyawanId), 300);
        }
      },
      error: (e) => {
        console.error(e);
        const p = new Set(this.processingKaryawan()); p.delete(karyawanId);
        this.processingKaryawan.set(p);
        alert(e?.message || 'Gagal menyimpan jadwal');
      }
    });
  }

  // ── Editor (single / bulk) ──────────────────────────────
  openEditor(karyawanId: number, tanggal: string): void {
    const a = this.assignmentMap()[this.cellKey(karyawanId, tanggal)];
    this.editorCells.set([{ karyawanId, tanggal }]);
    this.editorIsEdit.set(!!a);

    if (a) {
      // Coba ambil detail PolaKerja untuk prefill toleransi & istirahat
      const opts = this.matrix()?.shiftOptions || [];
      const pola = opts.find(p => p.id === a.polaKerjaId) || null;
      const hari = pola?.hariList?.[0];
      this.editorForm.set({
        namaPolaKerja:      pola?.namaPolaKerja ?? a.polaKerjaNama ?? '',
        toleransi:          pola?.toleransiKeterlambatan ?? 0,
        catatan:            a.keterangan ?? '',
        warna:              a.warna ?? '#000000',
        jamMasuk:           a.jamMasuk ?? hari?.jamMasuk ?? '',
        jamKeluar:          a.jamKeluar ?? hari?.jamKeluar ?? '',
        mulaiIstirahat:     hari?.mulaiIstirahat ?? '',
        selesaiIstirahat:   hari?.selesaiIstirahat ?? '',
        maksMenitIstirahat: hari?.maksMenitIstirahat ?? 60,
        status:             a.status ?? 'AKTIF'
      });
    } else {
      this.editorForm.set(this.emptyForm());
    }
    this.showEditor.set(true);
  }

  closeEditor(): void { this.showEditor.set(false); this.editorSaving.set(false); }

  updateForm<K extends keyof ShiftFormState>(key: K, val: ShiftFormState[K]): void {
    this.editorForm.set({ ...this.editorForm(), [key]: val });
  }

  saveEditor(): void {
    const cells = this.editorCells();
    if (cells.length === 0) return;
    const f = this.editorForm();

    // Validasi minimal
    if (f.status === 'AKTIF') {
      if (!f.namaPolaKerja.trim()) { alert('Nama Pola Kerja wajib diisi.'); return; }
      if (!f.jamMasuk || !f.jamKeluar) { alert('Jam Masuk dan Jam Keluar wajib diisi.'); return; }
    }

    this.editorSaving.set(true);

    const done = () => {
      this.editorSaving.set(false);
      this.closeEditor();
      this.loadMatrix();
    };
    const fail = (e: any) => {
      console.error(e);
      this.editorSaving.set(false);
      alert(e?.message || 'Gagal menyimpan jadwal');
    };

    // 1) Bila status AKTIF → buat PolaKerja baru terlebih dahulu lalu assign.
    //    Bila tidak (LIBUR/OFF) → langsung upsert tanpa PolaKerja.
    if (f.status !== 'AKTIF') {
      this.assignToCells(cells, null, f, done, fail);
      return;
    }

    // Kumpulkan divisi SHIFT dari semua karyawan terpilih agar pola kerja baru
    // otomatis terdaftar sebagai pola SHIFT (muncul di dropdown "Pilih Jadwal").
    const karyawanList = this.matrix()?.karyawan || [];
    const divisiIdsSet = new Set<number>();
    for (const c of cells) {
      const k = karyawanList.find(x => x.id === c.karyawanId);
      if (k?.divisiId != null) divisiIdsSet.add(k.divisiId);
    }
    const divisiIds = Array.from(divisiIdsSet);

    const polaReq: PolaKerjaRequest = {
      divisiIds,
      namaPolaKerja: f.namaPolaKerja.trim(),
      toleransiKeterlambatan: f.toleransi || 0,
      jenisJadwal: 'JAM_TETAP',
      hariList: HARI_LIST.map(hari => ({
        hari,
        polaHari: 'HARI_KERJA',
        jamMasuk: f.jamMasuk,
        jamKeluar: f.jamKeluar,
        mulaiIstirahat: f.mulaiIstirahat,
        selesaiIstirahat: f.selesaiIstirahat,
        maksMenitIstirahat: f.maksMenitIstirahat || 60
      }))
    };

    this.polaKerjaSvc.create(polaReq).subscribe({
      next: (pola) => this.assignToCells(cells, pola.id, f, done, fail),
      error: fail
    });
  }

  /** Helper: assign jadwal ke semua sel terpilih (single atau batch). */
  private assignToCells(
    cells: CellKey[],
    polaKerjaId: number | null,
    f: ShiftFormState,
    done: () => void,
    fail: (e: any) => void
  ): void {
    if (cells.length === 1) {
      const c = cells[0];
      this.svc.upsert({
        karyawanId: c.karyawanId,
        tanggal: c.tanggal,
        polaKerjaId,
        jamMasuk: f.jamMasuk || null,
        jamKeluar: f.jamKeluar || null,
        status: f.status,
        keterangan: f.catatan || null,
        warna: f.warna || null
      }).subscribe({ next: done, error: fail });
    } else {
      const karyawanIds = Array.from(new Set(cells.map(c => c.karyawanId)));
      const tanggalList = Array.from(new Set(cells.map(c => c.tanggal)));
      const req: JadwalShiftBatchRequest = {
        karyawanIds, tanggalList, polaKerjaId,
        jamMasuk: f.jamMasuk || null,
        jamKeluar: f.jamKeluar || null,
        status: f.status,
        keterangan: f.catatan || null,
        warna: f.warna || null,
        overwrite: true
      };
      this.svc.batch(req).subscribe({ next: done, error: fail });
    }
  }

  hapusJadwal(): void {
    const cells = this.editorCells();
    if (cells.length !== 1) return;
    const a = this.assignmentMap()[this.cellKey(cells[0].karyawanId, cells[0].tanggal)];
    if (!a?.id) { this.closeEditor(); return; }
    if (!confirm('Hapus jadwal pada sel ini?')) return;
    this.editorSaving.set(true);
    this.svc.delete(a.id).subscribe({
      next: () => { this.editorSaving.set(false); this.closeEditor(); this.loadMatrix(); },
      error: (e) => { this.editorSaving.set(false); alert(e?.message || 'Gagal menghapus'); }
    });
  }

  // ── Ulang Jadwal Massal ────────────────────────────────
  openBulkModal(): void {
    this.bulkDivisiId.set(this.divisiFilter());
    // Default minggu sumber: minggu (Senin) yang berisi tanggal hari ini,
    // atau minggu pertama pada matrix bila hari ini di luar bulan yang dilihat.
    const today = new Date();
    let monday = this.startOfWeek(today);
    const mx = this.matrix();
    if (mx && (this.toDateString(monday) < mx.startDate || this.toDateString(monday) > mx.endDate)) {
      monday = this.startOfWeek(this.parseDate(mx.startDate));
    }
    this.bulkWeekStart.set(this.toDateString(monday));
    this.bulkRepeatWeekly.set(true);
    this.showBulkModal.set(true);
  }
  closeBulkModal(): void { this.showBulkModal.set(false); this.bulkSaving.set(false); }

  prevBulkWeek(): void { this.shiftBulkWeek(-7); }
  nextBulkWeek(): void { this.shiftBulkWeek(7); }
  private shiftBulkWeek(deltaDays: number): void {
    const ws = this.bulkWeekStart();
    if (!ws) return;
    const d = this.parseDate(ws);
    d.setDate(d.getDate() + deltaDays);
    this.bulkWeekStart.set(this.toDateString(d));
  }

  saveBulk(): void {
    const ws = this.bulkWeekStart();
    if (!ws) { alert('Tentukan minggu sumber terlebih dahulu.'); return; }

    const list = this.matrix()?.karyawan || [];
    const did  = this.bulkDivisiId();
    const targetKaryawan = (did == null) ? list : list.filter(k => k.divisiId === did);
    if (targetKaryawan.length === 0) { alert('Tidak ada karyawan untuk di-ulang.'); return; }

    const karyawanIds = targetKaryawan.map(k => k.id);
    const sourceStart = this.parseDate(ws);

    // Tentukan minggu-minggu tujuan.
    // - Tanpa centang  : 1 minggu berikutnya saja.
    // - Dengan centang : semua minggu berikutnya sampai akhir bulan minggu sumber
    //                    (minimal 1 minggu bila bulan sudah habis).
    const targetWeeks: Date[] = [];
    let cursor = new Date(sourceStart); cursor.setDate(cursor.getDate() + 7);

    if (this.bulkRepeatWeekly()) {
      // Akhir bulan dari minggu sumber (anggap minggu = Senin–Minggu, bulan = bulan tanggal Senin)
      const lastDay = new Date(sourceStart.getFullYear(), sourceStart.getMonth() + 1, 0);
      while (cursor <= lastDay) {
        targetWeeks.push(new Date(cursor));
        cursor.setDate(cursor.getDate() + 7);
      }
      // Minimal 1 minggu agar selalu bisa diproses
      if (targetWeeks.length === 0) targetWeeks.push(new Date(cursor));
    } else {
      targetWeeks.push(new Date(cursor));
    }

    const ok = confirm(
      `Akan mengulang jadwal minggu sumber ke ${targetWeeks.length} minggu berikutnya untuk ${targetKaryawan.length} karyawan. Jadwal yang sudah ada akan ditimpa. Lanjutkan?`
    );
    if (!ok) return;

    this.bulkSaving.set(true);
    let pending = targetWeeks.length;
    let totalSalin = 0;
    let gagal = false;

    for (const w of targetWeeks) {
      this.svc.copyWeek({
        sourceWeekStart: ws,
        targetWeekStart: this.toDateString(w),
        karyawanIds,
        overwrite: true
      }).subscribe({
        next: (n) => {
          totalSalin += n || 0;
          if (--pending === 0) this.finishBulk(gagal, totalSalin);
        },
        error: (e) => {
          gagal = true;
          console.error(e);
          if (--pending === 0) this.finishBulk(gagal, totalSalin);
        }
      });
    }
  }

  private finishBulk(gagal: boolean, total: number): void {
    this.bulkSaving.set(false);
    this.closeBulkModal();
    this.loadMatrix();
    if (gagal) alert(`Sebagian proses gagal. Total ${total} jadwal berhasil di-ulang.`);
    else       alert(`Berhasil mengulang ${total} jadwal.`);
  }

  // ── Impor Jadwal Massal ────────────────────────────────
  openImporModal(): void {
    this.imporFile.set(null);
    this.imporResult.set(null);
    this.showImporModal.set(true);
  }

  closeImporModal(): void {
    this.showImporModal.set(false);
    this.imporUploading.set(false);
    if (this.imporResult()) {
      this.loadMatrix();
    }
  }

  downloadTemplate(): void {
    this.svc.downloadTemplate(this.bulan());
  }

  /** Buka modal Ekspor Excel (pre-fill dari filter aktif). */
  eksporExcel(): void {
    this.eksporDivisiId.set(this.divisiFilter());
    const cur = this.bulan(); // 'YYYY-MM'
    if (cur && /^\d{4}-\d{2}$/.test(cur)) {
      const [y, m] = cur.split('-').map(n => parseInt(n, 10));
      this.eksporTahun.set(y);
      this.eksporBulan.set(m);
    }
    this.showEksporModal.set(true);
  }

  closeEksporModal(): void {
    if (this.exporting()) return;
    this.showEksporModal.set(false);
  }

  /** Proses ekspor — dipanggil dari tombol "Proses" pada modal. */
  submitEkspor(): void {
    if (this.exporting()) return;
    const y = this.eksporTahun();
    const m = String(this.eksporBulan()).padStart(2, '0');
    const bulanStr = `${y}-${m}`;
    this.exporting.set(true);
    this.svc.eksporExcel(bulanStr, this.eksporDivisiId(), this.search()).subscribe({
      next: () => {
        this.exporting.set(false);
        this.showEksporModal.set(false);
      },
      error: (e) => {
        this.exporting.set(false);
        alert(e?.error?.message || e?.message || 'Gagal mengekspor jadwal shift.');
      }
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.imporFile.set(input.files[0]);
    } else {
      this.imporFile.set(null);
    }
  }

  uploadImpor(): void {
    const file = this.imporFile();
    if (!file) return;

    this.imporUploading.set(true);
    this.imporResult.set(null);

    this.svc.impor(file).subscribe({
      next: (res) => {
        this.imporResult.set(res);
        this.imporUploading.set(false);
      },
      error: (e) => {
        console.error(e);
        this.imporUploading.set(false);
        alert(e?.message || 'Terjadi kesalahan saat mengimpor jadwal.');
      }
    });
  }

  // ── Helpers ─────────────────────────────────────────────
  toMonthString(d: Date): string {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    return `${y}-${m}`;
  }
  toDateString(d: Date): string {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }
  startOfWeek(d: Date): Date {
    const result = new Date(d);
    const day = result.getDay() || 7; // Sunday=0 -> 7
    result.setDate(result.getDate() - (day - 1));
    return result;
  }
  parseDate(s: string): Date { return new Date(s + 'T00:00:00'); }
  isWeekend(s: string): boolean {
    const dow = this.parseDate(s).getDay();
    return dow === 0 || dow === 6;
  }
  dayLabel(s: string): string {
    const labels = ['Min','Sen','Sel','Rab','Kam','Jum','Sab'];
    return labels[this.parseDate(s).getDay()];
  }
  dayNum(s: string): number { return this.parseDate(s).getDate(); }
  /** "Senin, 27 Apr 2026" */
  formatHariTanggal(d: Date): string {
    const hari  = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'][d.getDay()];
    const bulan = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'][d.getMonth()];
    return `${hari}, ${String(d.getDate()).padStart(2,'0')} ${bulan} ${d.getFullYear()}`;
  }
  fotoUrl(foto: string | null | undefined): string | null {
    if (!foto) return null;
    if (foto.startsWith('http')) return foto;
    return `${environment.baseUrl}/${foto}`;
  }
  statusOptions: { value: StatusJadwalShift; label: string }[] = [
    { value: 'AKTIF', label: 'Aktif (Shift)' },
    { value: 'LIBUR', label: 'Libur' },
    { value: 'OFF',   label: 'Off' }
  ];
  trackByKaryawan = (_: number, k: KaryawanShift) => k.id;
  trackByDate     = (_: number, d: string) => d;
  trackByPola     = (_: number, p: PolaKerja) => p.id;
}
