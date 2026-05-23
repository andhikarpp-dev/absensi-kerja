import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { KaryawanService } from '../../../core/services/karyawan.service';
import { PayrollService } from '../../../core/services/payroll.service';
import { Karyawan } from '../../../core/models/karyawan.model';
import { PayrollRincianGaji, PayrollPph21Riwayat } from '../../../core/models/payroll.model';

type TabPayroll = 'GAJI_DASAR' | 'PEMBAYARAN_GAJI' | 'BPJS' | 'PPH21' | 'REKENING_BANK';

@Component({
  selector: 'app-karyawan-payroll',
  standalone: true,
  imports: [CommonModule, FormsModule, LayoutComponent],
  templateUrl: './karyawan-payroll.component.html',
  styleUrl: './karyawan-payroll.component.scss'
})
export class KaryawanPayrollComponent implements OnInit {
  private route       = inject(ActivatedRoute);
  private karyawanSvc = inject(KaryawanService);
  private payrollSvc  = inject(PayrollService);

  karyawanId = 0;
  karyawan   = signal<Karyawan | null>(null);
  loading    = signal(false);
  saving     = signal(false);
  saved      = signal(false);
  error      = signal('');

  // ── Tabs ─────────────────────────────────────────────────────────
  activeTab = signal<TabPayroll>('GAJI_DASAR');

  tabs: { key: TabPayroll; label: string }[] = [
    { key: 'GAJI_DASAR',      label: 'Pengaturan Gaji Dasar' },
    { key: 'PEMBAYARAN_GAJI', label: 'Pembayaran Gaji' },
    { key: 'BPJS',            label: 'Pengaturan Kepesertaan BPJS' },
    { key: 'PPH21',           label: 'PPH 21' },
    { key: 'REKENING_BANK',   label: 'Rekening Bank' },
  ];

  // ── Form Gaji Dasar ───────────────────────────────────────────────
  tipeGaji = signal('PER_BULAN');
  tipeGajiOptions = [
    { value: 'PER_BULAN',  label: 'Per Bulan' },
    { value: 'PER_HARI',   label: 'Per Hari' },
    { value: 'PER_JAM',    label: 'Per Jam' },
    { value: 'PER_MINGGU', label: 'Per Minggu' },
  ];

  periodeOptions = ['Perbulan', 'Per Hari', 'Per Jam', 'Per Minggu'];

  rincianGaji = signal<PayrollRincianGaji[]>([
    { nama: 'Gaji Pokok', jumlah: 0, periode: 'Perbulan' }
  ]);

  totalGaji = computed(() =>
    this.rincianGaji().reduce((s, r) => s + (+r.jumlah || 0), 0)
  );

  addRincian() {
    this.rincianGaji.set([...this.rincianGaji(), { nama: '', jumlah: 0, periode: 'Perbulan' }]);
  }

  removeRincian(i: number) {
    this.rincianGaji.set(this.rincianGaji().filter((_, idx) => idx !== i));
  }

  updateRincian(i: number, field: keyof PayrollRincianGaji, value: any) {
    const arr = [...this.rincianGaji()];
    arr[i] = { ...arr[i], [field]: field === 'jumlah' ? +value : value };
    this.rincianGaji.set(arr);
  }

  // ── Upah Lembur ───────────────────────────────────────────────────
  tipeUpahLembur = signal('');
  satuanLembur   = signal('Per Jam');
  satuanLemburOptions = ['Per Jam', 'Per Hari', 'Per Menit'];

  lemburHariKerja     = signal(0);
  lemburSabtu         = signal(0);
  lemburMinggu        = signal(0);
  lemburKalenderLibur = signal(0);

  // ── Potongan ─────────────────────────────────────────────────────
  potonganIzinJam                  = signal(0);
  potonganJamKerjaTidakTerpenuhi   = signal(0);
  potonganAbsenOtomatis            = signal(true);
  potonganAbsenManual              = signal(false);

  // ── BPJS Ketenagakerjaan ─────────────────────────────────────────
  tkTanggalKepesertaan = signal('');
  tkNomor              = signal('');
  tkUpahDidaftarkan    = signal(0);

  // ── BPJS Kesehatan ────────────────────────────────────────────────
  kesTanggalKepesertaan       = signal('');
  kesNomor                    = signal('');
  kesUpahDidaftarkan          = signal(0);
  kesAnggotaKeluargaInti      = signal(0);
  kesAnggotaKeluargaTambahan  = signal(0);

  // ── PPH 21 ───────────────────────────────────────────────────────
  // Pengaturan
  statusPkp        = signal('NON_PKP');
  npwp             = signal('');
  statusPtkp       = signal('');
  tanggungan       = signal(0);
  metodePph        = signal('GROSS');
  pph21Options     = ['GROSS', 'GROSS_UP', 'NET'];
  statusPkpOptions = [
    { value: 'NON_PKP', label: 'Pegawai Tetap' },
    { value: 'PKP',     label: 'Bukan Pegawai Tetap' },
  ];
  statusPtkpOptions = [
    'TK/0','TK/1','TK/2','TK/3',
    'K/0','K/1','K/2','K/3',
  ];
  pengaturanPph21Open = signal(true);
  pengaturanPph21Saved = signal(false);

  // Riwayat
  riwayatPph21Open  = signal(true);
  riwayatPph21List  = signal<PayrollPph21Riwayat[]>([]);
  riwayatPph21Year  = signal<number>(new Date().getFullYear());
  riwayatPph21YearOptions = computed(() => {
    const cy = new Date().getFullYear();
    return [cy, cy - 1, cy - 2, cy - 3, cy - 4];
  });
  riwayatPph21Filtered = computed(() =>
    this.riwayatPph21List().filter(r => {
      const y = (r.periode || '').slice(0, 4);
      return y === String(this.riwayatPph21Year());
    })
  );
  totalDpp = computed(() =>
    this.riwayatPph21Filtered().reduce((s, r) => s + (+(r.pendapatanBruto ?? 0) || 0), 0)
  );
  totalPph21 = computed(() =>
    this.riwayatPph21Filtered().reduce((s, r) => s + (+(r.pph21Terutang ?? 0) || 0), 0)
  );
  totalThp = computed(() =>
    this.riwayatPph21Filtered().reduce((s, r) => {
      const bruto = +(r.pendapatanBruto ?? 0) || 0;
      const pph   = +(r.pph21Terutang   ?? 0) || 0;
      return s + Math.max(0, bruto - pph);
    }, 0)
  );

  // Modal Input/Update Manual PPH 21
  showPph21Modal      = signal(false);
  pph21EditingId      = signal<number | null>(null);
  pph21Periode        = signal<string>(''); // yyyy-MM
  pph21StatusPtkp     = signal<string>('');
  pph21StatusKaryawan = signal<string>('');
  pph21GajiDasar      = signal<number>(0);
  pph21Dpp            = signal<number>(0);
  pph21Ter            = signal<string>('');
  pph21Nilai          = signal<number>(0);
  pph21Thp            = signal<number>(0);
  pph21Tunjangan      = signal<{ nama: string; jumlah: number }[]>([]);
  pph21Potongan       = signal<{ nama: string; jumlah: number }[]>([]);
  pph21ModalSaving    = signal(false);
  pph21ModalError     = signal('');

  terOptions = ['A', 'B', 'C']; // TER PMK 168/2023 (sederhana)
  statusKaryawanModalOptions = [
    'Pegawai Tetap',
    'Pegawai Tidak Tetap',
    'Bukan Pegawai',
  ];

  // ── Rekening Bank ────────────────────────────────────────────────
  namaBank      = signal('');
  nomorRekening = signal('');
  atasNama      = signal('');

  // ─────────────────────────────────────────────────────────────────

  ngOnInit() {
    this.karyawanId = +this.route.snapshot.paramMap.get('id')!;
    this.karyawanSvc.findById(this.karyawanId).subscribe({
      next: k => this.karyawan.set(k),
      error: () => {}
    });
    this.loadGajiDasar();
    this.loadBpjs();
    this.loadRekeningBank();
    this.loadPph21();
    this.loadRiwayatPph21();
  }

  loadPph21() {
    this.payrollSvc.getPph21(this.karyawanId).subscribe({
      next: data => {
        if (!data) return;
        this.statusPkp.set(data.statusPkp ?? 'NON_PKP');
        this.npwp.set(data.npwp ?? '');
        this.statusPtkp.set(data.statusPtkp ?? '');
        this.tanggungan.set(data.jumlahTanggungan ?? 0);
        this.metodePph.set(data.metodePph ?? 'GROSS');
      },
      error: () => {}
    });
  }

  loadRiwayatPph21() {
    this.payrollSvc.listRiwayatPph21(this.karyawanId).subscribe({
      next: list => this.riwayatPph21List.set(list ?? []),
      error: () => this.riwayatPph21List.set([])
    });
  }

  // ── Modal Input/Update Manual PPH 21 ─────────────────────────────
  bukaPph21Modal(r?: PayrollPph21Riwayat) {
    this.pph21ModalError.set('');
    if (r) {
      this.pph21EditingId.set(r.id ?? null);
      this.pph21Periode.set((r.periode ?? '').slice(0, 7));
      this.pph21Dpp.set(+(r.pendapatanBruto ?? 0));
      this.pph21Nilai.set(+(r.pph21Terutang ?? 0));
      this.pph21Thp.set(this.hitungThp(r.pendapatanBruto, r.pph21Terutang));
      this.pph21StatusPtkp.set(this.statusPtkp());
      this.pph21StatusKaryawan.set('');
      this.pph21GajiDasar.set(0);
      this.pph21Ter.set('');
      this.pph21Tunjangan.set([]);
      this.pph21Potongan.set([]);
    } else {
      this.pph21EditingId.set(null);
      const now = new Date();
      const m = String(now.getMonth() + 1).padStart(2, '0');
      this.pph21Periode.set(`${now.getFullYear()}-${m}`);
      this.pph21StatusPtkp.set(this.statusPtkp());
      this.pph21StatusKaryawan.set('');
      this.pph21GajiDasar.set(0);
      this.pph21Dpp.set(0);
      this.pph21Ter.set('');
      this.pph21Nilai.set(0);
      this.pph21Thp.set(0);
      this.pph21Tunjangan.set([]);
      this.pph21Potongan.set([]);
    }
    this.showPph21Modal.set(true);
  }

  tutupPph21Modal() {
    this.showPph21Modal.set(false);
  }

  tambahPph21Tunjangan() {
    this.pph21Tunjangan.set([...this.pph21Tunjangan(), { nama: '', jumlah: 0 }]);
  }
  hapusPph21Tunjangan(i: number) {
    this.pph21Tunjangan.set(this.pph21Tunjangan().filter((_, idx) => idx !== i));
  }
  updatePph21Tunjangan(i: number, field: 'nama' | 'jumlah', value: any) {
    const arr = [...this.pph21Tunjangan()];
    arr[i] = { ...arr[i], [field]: field === 'jumlah' ? +value : value };
    this.pph21Tunjangan.set(arr);
  }
  tambahPph21Potongan() {
    this.pph21Potongan.set([...this.pph21Potongan(), { nama: '', jumlah: 0 }]);
  }
  hapusPph21Potongan(i: number) {
    this.pph21Potongan.set(this.pph21Potongan().filter((_, idx) => idx !== i));
  }
  updatePph21Potongan(i: number, field: 'nama' | 'jumlah', value: any) {
    const arr = [...this.pph21Potongan()];
    arr[i] = { ...arr[i], [field]: field === 'jumlah' ? +value : value };
    this.pph21Potongan.set(arr);
  }

  simpanPph21Modal() {
    const periode = this.pph21Periode();
    if (!periode) { this.pph21ModalError.set('Periode wajib diisi.'); return; }
    if (!this.pph21StatusPtkp()) { this.pph21ModalError.set('Status PTKP wajib dipilih.'); return; }
    if (!this.pph21StatusKaryawan()) { this.pph21ModalError.set('Status Karyawan wajib dipilih.'); return; }

    const totalTunjangan = this.pph21Tunjangan().reduce((s, r) => s + (+r.jumlah || 0), 0);
    const totalPotongan  = this.pph21Potongan().reduce((s, r) => s + (+r.jumlah || 0), 0);
    const bruto = (+this.pph21GajiDasar() || 0) + totalTunjangan - totalPotongan;
    const pph   = +this.pph21Nilai() || 0;

    const catatan = JSON.stringify({
      statusPtkp:     this.pph21StatusPtkp(),
      statusKaryawan: this.pph21StatusKaryawan(),
      gajiDasar:      this.pph21GajiDasar(),
      dpp:            this.pph21Dpp(),
      ter:            this.pph21Ter(),
      tunjangan:      this.pph21Tunjangan(),
      potongan:       this.pph21Potongan(),
    });

    const req = {
      periode:          `${periode}-01`,
      pendapatanBruto:  bruto,
      pph21Terutang:    pph,
      dibayarkan:       pph,
      tanggalBayar:     `${periode}-01`,
      statusPembayaran: 'LUNAS',
      catatan,
    };

    this.pph21ModalSaving.set(true);
    const obs = this.pph21EditingId()
      ? this.payrollSvc.updateRiwayatPph21(this.karyawanId, this.pph21EditingId()!, req)
      : this.payrollSvc.saveRiwayatPph21(this.karyawanId, req);
    obs.subscribe({
      next: () => {
        this.pph21ModalSaving.set(false);
        this.tutupPph21Modal();
        this.loadRiwayatPph21();
      },
      error: e => {
        this.pph21ModalSaving.set(false);
        this.pph21ModalError.set(e?.error?.message ?? 'Gagal menyimpan data PPH 21.');
      }
    });
  }

  hapusRiwayatPph21(r: PayrollPph21Riwayat) {
    if (!r.id) return;
    if (!confirm('Hapus riwayat PPH 21 periode ' + (r.periode ?? '') + '?')) return;
    this.payrollSvc.deleteRiwayatPph21(this.karyawanId, r.id).subscribe({
      next: () => this.loadRiwayatPph21(),
      error: () => alert('Gagal menghapus riwayat.')
    });
  }

  formatBulanPeriode(periode?: string): string {
    if (!periode) return '-';
    const d = new Date(periode);
    if (isNaN(d.getTime())) return periode;
    const bulan = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
    return `${bulan[d.getMonth()]} ${d.getFullYear()}`;
  }

  /** THP per baris riwayat = bruto - pph21 (tidak negatif). */
  hitungThp(bruto?: number, pph?: number): number {
    return Math.max(0, (+(bruto ?? 0) || 0) - (+(pph ?? 0) || 0));
  }

  loadRekeningBank() {
    this.payrollSvc.getRekeningBank(this.karyawanId).subscribe({
      next: data => {
        if (!data) return;
        this.namaBank.set(data.namaBank ?? '');
        this.nomorRekening.set(data.nomorRekening ?? '');
        this.atasNama.set(data.atasNama ?? '');
      },
      error: () => {}
    });
  }

  loadBpjs() {
    this.payrollSvc.getBpjs(this.karyawanId).subscribe({
      next: data => {
        if (!data) return;
        this.tkTanggalKepesertaan.set(data.tkTanggalKepesertaan ?? '');
        this.tkNomor.set(data.tkNomor ?? '');
        this.tkUpahDidaftarkan.set(data.tkUpahDidaftarkan ?? 0);
        this.kesTanggalKepesertaan.set(data.kesTanggalKepesertaan ?? '');
        this.kesNomor.set(data.kesNomor ?? '');
        this.kesUpahDidaftarkan.set(data.kesUpahDidaftarkan ?? 0);
        this.kesAnggotaKeluargaInti.set(data.kesAnggotaKeluargaInti ?? 0);
        this.kesAnggotaKeluargaTambahan.set(data.kesAnggotaKeluargaTambahan ?? 0);
      },
      error: () => {}
    });
  }

  loadGajiDasar() {
    this.loading.set(true);
    this.payrollSvc.getGajiDasar(this.karyawanId).subscribe({
      next: data => {
        this.loading.set(false);
        if (!data) return;
        this.tipeGaji.set(data.tipeGaji ?? 'PER_BULAN');
        if (data.rincianGaji?.length) {
          this.rincianGaji.set(data.rincianGaji.map(r => ({
            id: r.id, nama: r.nama, jumlah: +r.jumlah, periode: r.periode
          })));
        }
        this.tipeUpahLembur.set(data.tipeUpahLembur ?? '');
        this.satuanLembur.set(data.satuanLembur ?? 'Per Jam');
        this.lemburHariKerja.set(data.lemburHariKerja ?? 0);
        this.lemburSabtu.set(data.lemburSabtu ?? 0);
        this.lemburMinggu.set(data.lemburMinggu ?? 0);
        this.lemburKalenderLibur.set(data.lemburKalenderLibur ?? 0);
        this.potonganIzinJam.set(data.potonganIzinJam ?? 0);
        this.potonganJamKerjaTidakTerpenuhi.set(data.potonganJamKerjaTidakTerpenuhi ?? 0);
        this.potonganAbsenOtomatis.set(data.potonganAbsenOtomatis ?? true);
        this.potonganAbsenManual.set(data.potonganAbsenManual ?? false);
      },
      error: () => this.loading.set(false)
    });
  }

  // ── Modal Samakan dengan Karyawan Lain ───────────────────────────
  showSamakanModal  = signal(false);
  samakanSearch     = signal('');
  samakanTargetId   = signal<number | ''>('');
  samakanLoading    = signal(false);
  samakanError      = signal('');
  samakanSuccess    = signal(false);
  allKaryawanList   = signal<Karyawan[]>([]);

  filteredKaryawanList = computed(() => {
    const q = this.samakanSearch().toLowerCase();
    return this.allKaryawanList().filter(k =>
      !q || k.namaLengkap?.toLowerCase().includes(q)
    );
  });

  openSamakan() {
    this.samakanError.set('');
    this.samakanSuccess.set(false);
    this.samakanTargetId.set('');
    this.samakanSearch.set('');
    this.showSamakanModal.set(true);
    if (this.allKaryawanList().length === 0) {
      this.karyawanSvc.findAll().subscribe({
        next: list => this.allKaryawanList.set(list),
        error: () => {}
      });
    }
  }

  closeSamakan() {
    this.showSamakanModal.set(false);
  }

  submitSamakan() {
    const targetId = this.samakanTargetId();
    if (!targetId) return;
    this.samakanLoading.set(true);
    this.samakanError.set('');
    this.payrollSvc.getGajiDasar(+targetId).subscribe({
      next: data => {
        this.samakanLoading.set(false);
        if (!data) {
          this.samakanError.set('Karyawan yang dipilih belum memiliki pengaturan gaji dasar.');
          return;
        }
        // Apply data to current form
        this.tipeGaji.set(data.tipeGaji ?? 'PER_BULAN');
        if (data.rincianGaji?.length) {
          this.rincianGaji.set(data.rincianGaji.map(r => ({
            nama: r.nama, jumlah: +r.jumlah, periode: r.periode
          })));
        }
        this.tipeUpahLembur.set(data.tipeUpahLembur ?? '');
        this.satuanLembur.set(data.satuanLembur ?? 'Per Jam');
        this.lemburHariKerja.set(data.lemburHariKerja ?? 0);
        this.lemburSabtu.set(data.lemburSabtu ?? 0);
        this.lemburMinggu.set(data.lemburMinggu ?? 0);
        this.lemburKalenderLibur.set(data.lemburKalenderLibur ?? 0);
        this.potonganIzinJam.set(data.potonganIzinJam ?? 0);
        this.potonganJamKerjaTidakTerpenuhi.set(data.potonganJamKerjaTidakTerpenuhi ?? 0);
        this.potonganAbsenOtomatis.set(data.potonganAbsenOtomatis ?? true);
        this.potonganAbsenManual.set(data.potonganAbsenManual ?? false);
        this.samakanSuccess.set(true);
        setTimeout(() => { this.closeSamakan(); this.samakanSuccess.set(false); }, 1500);
      },
      error: () => {
        this.samakanLoading.set(false);
        this.samakanError.set('Gagal mengambil data gaji karyawan acuan.');
      }
    });
  }

  setTab(tab: TabPayroll) { this.activeTab.set(tab); }

  simpan() {
    this.saving.set(true);
    this.error.set('');

    if (this.activeTab() === 'GAJI_DASAR') {
      this.payrollSvc.saveGajiDasar(this.karyawanId, {
        tipeGaji:    this.tipeGaji(),
        rincianGaji: this.rincianGaji().map(r => ({
          nama: r.nama, jumlah: r.jumlah, periode: r.periode
        })),
        tipeUpahLembur:                    this.tipeUpahLembur(),
        satuanLembur:                      this.satuanLembur(),
        lemburHariKerja:                   this.lemburHariKerja(),
        lemburSabtu:                       this.lemburSabtu(),
        lemburMinggu:                      this.lemburMinggu(),
        lemburKalenderLibur:               this.lemburKalenderLibur(),
        potonganIzinJam:                   this.potonganIzinJam(),
        potonganJamKerjaTidakTerpenuhi:    this.potonganJamKerjaTidakTerpenuhi(),
        potonganAbsenOtomatis:             this.potonganAbsenOtomatis(),
        potonganAbsenManual:               this.potonganAbsenManual(),
      }).subscribe({
        next: data => {
          this.saving.set(false);
          this.saved.set(true);
          // Sync rincian IDs from response
          if (data.rincianGaji) {
            this.rincianGaji.set(data.rincianGaji.map(r => ({
              id: r.id, nama: r.nama, jumlah: +r.jumlah, periode: r.periode
            })));
          }
          setTimeout(() => this.saved.set(false), 3000);
        },
        error: err => {
          this.saving.set(false);
          this.error.set(err?.error?.message ?? 'Gagal menyimpan data.');
        }
      });
    } else if (this.activeTab() === 'BPJS') {
      this.payrollSvc.saveBpjs(this.karyawanId, {
        tkTanggalKepesertaan:      this.tkTanggalKepesertaan() || undefined,
        tkNomor:                   this.tkNomor() || undefined,
        tkUpahDidaftarkan:         this.tkUpahDidaftarkan(),
        kesTanggalKepesertaan:     this.kesTanggalKepesertaan() || undefined,
        kesNomor:                  this.kesNomor() || undefined,
        kesUpahDidaftarkan:        this.kesUpahDidaftarkan(),
        kesAnggotaKeluargaInti:    this.kesAnggotaKeluargaInti(),
        kesAnggotaKeluargaTambahan:this.kesAnggotaKeluargaTambahan(),
      }).subscribe({
        next: () => {
          this.saving.set(false);
          this.saved.set(true);
          setTimeout(() => this.saved.set(false), 3000);
        },
        error: err => {
          this.saving.set(false);
          this.error.set(err?.error?.message ?? 'Gagal menyimpan BPJS.');
        }
      });
    } else if (this.activeTab() === 'REKENING_BANK') {
      this.payrollSvc.saveRekeningBank(this.karyawanId, {
        namaBank:      this.namaBank() || undefined,
        nomorRekening: this.nomorRekening() || undefined,
        atasNama:      this.atasNama() || undefined,
      }).subscribe({
        next: () => {
          this.saving.set(false);
          this.saved.set(true);
          setTimeout(() => this.saved.set(false), 3000);
        },
        error: err => {
          this.saving.set(false);
          this.error.set(err?.error?.message ?? 'Gagal menyimpan rekening bank.');
        }
      });
    } else if (this.activeTab() === 'PPH21') {
      this.payrollSvc.savePph21(this.karyawanId, {
        statusPkp:        this.statusPkp(),
        npwp:             this.npwp() || undefined,
        statusPtkp:       this.statusPtkp() || undefined,
        jumlahTanggungan: this.tanggungan(),
        metodePph:        this.metodePph(),
      }).subscribe({
        next: () => {
          this.saving.set(false);
          this.saved.set(true);
          this.pengaturanPph21Saved.set(true);
          setTimeout(() => { this.saved.set(false); this.pengaturanPph21Saved.set(false); }, 3000);
        },
        error: err => {
          this.saving.set(false);
          this.error.set(err?.error?.message ?? 'Gagal menyimpan pengaturan PPH 21.');
        }
      });
    } else {
      // Placeholder for other tabs (Pembayaran Gaji)
      setTimeout(() => {
        this.saving.set(false);
        this.saved.set(true);
        setTimeout(() => this.saved.set(false), 3000);
      }, 500);
    }
  }

  formatRp(n: number): string {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency', currency: 'IDR', maximumFractionDigits: 0
    }).format(n);
  }
}
