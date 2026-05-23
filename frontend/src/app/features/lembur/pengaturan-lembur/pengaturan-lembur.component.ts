import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { environment } from '../../../../environments/environment';

type TabKey = 'JADWAL' | 'ATURAN_UPAH' | 'DIVISI';

export interface TarifLembur {
  id?: number;
  jamLembur: number;
  hariKerja: number;
  hariLibur5HariKerja: number;
  hariLibur6HariKerja: number;
}

export interface DivisiLembur {
  id: number;
  nama: string;
  polaMinggu?: string;
  presensiLokasiMulai: boolean;
  presensiLokasiSelesai: boolean;
  catatanMulaiLembur: string;
  catatanSelesaiLembur: string;
  cegahTanpaJadwal: boolean;
}

@Component({
  selector: 'app-pengaturan-lembur',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent],
  templateUrl: './pengaturan-lembur.component.html'
})
export class PengaturanLemburComponent implements OnInit {
  private http = inject(HttpClient);

  activeTab = signal<TabKey>('JADWAL');

  // ── Tab: Aturan Upah ──────────────────────────────────
  tarifList = signal<TarifLembur[]>([]);
  tarifLoading = signal(false);
  tarifSaving = signal(false);
  tarifError = signal('');
  tarifSuccess = signal('');

  // ── Tab: Divisi ───────────────────────────────────────
  divisiList = signal<DivisiLembur[]>([]);
  divisiLoading = signal(false);
  divisiSaving = signal(false);
  divisiError = signal('');
  divisiSuccess = signal('');
  divisiSearch = signal('');

  // ── Tab: Jadwal ───────────────────────────────────────
  jadwalLoading = signal(false);
  jadwalSaving = signal(false);
  jadwalError = signal('');
  jadwalSuccess = signal('');

  // Pengaturan jadwal toggle settings
  cegahPresensiTanpaJadwal = signal(false);
  kirimNotifikasiJadwal = signal(true);
  menitSebelumJadwal = signal<number | null>(null);

  get catatanOptions() {
    return ['Tidak Dibutuhkan', 'Opsional', 'Dibutuhkan'];
  }

  get filteredDivisi() {
    const q = this.divisiSearch().toLowerCase();
    if (!q) return this.divisiList();
    return this.divisiList().filter(d => d.nama.toLowerCase().includes(q));
  }

  ngOnInit() {
    this.loadTarif();
    this.loadDivisi();
    this.loadJadwal();
  }

  setTab(tab: TabKey) {
    this.activeTab.set(tab);
  }

  // ── Tarif Upah ────────────────────────────────────────
  loadTarif() {
    this.tarifLoading.set(true);
    this.http.get<TarifLembur[]>(`${environment.apiUrl}/lembur/tarif-upah`).subscribe({
      next: data => {
        if (data && data.length > 0) {
          this.tarifList.set(data);
        } else {
          this.tarifList.set(this.defaultTarif());
        }
        this.tarifLoading.set(false);
      },
      error: () => {
        this.tarifList.set(this.defaultTarif());
        this.tarifLoading.set(false);
      }
    });
  }

  defaultTarif(): TarifLembur[] {
    return Array.from({ length: 14 }, (_, i) => ({
      jamLembur: i + 1,
      hariKerja: i === 0 ? 1.5 : 2,
      hariLibur5HariKerja: 2,
      hariLibur6HariKerja: i === 7 ? 3 : 2
    }));
  }

  saveTarif() {
    this.tarifSaving.set(true);
    this.tarifError.set('');
    this.tarifSuccess.set('');
    this.http.post(`${environment.apiUrl}/lembur/tarif-upah`, this.tarifList()).subscribe({
      next: () => {
        this.tarifSuccess.set('Aturan upah lembur berhasil disimpan.');
        this.tarifSaving.set(false);
        setTimeout(() => this.tarifSuccess.set(''), 3000);
      },
      error: () => {
        this.tarifError.set('Gagal menyimpan. Silakan coba lagi.');
        this.tarifSaving.set(false);
      }
    });
  }

  // ── Divisi ────────────────────────────────────────────
  loadDivisi() {
    this.divisiLoading.set(true);
    this.http.get<DivisiLembur[]>(`${environment.apiUrl}/lembur/divisi-pengaturan`).subscribe({
      next: data => { this.divisiList.set(data); this.divisiLoading.set(false); },
      error: () => { this.divisiLoading.set(false); }
    });
  }

  saveDivisi() {
    this.divisiSaving.set(true);
    this.divisiError.set('');
    this.divisiSuccess.set('');
    this.http.put(`${environment.apiUrl}/lembur/divisi-pengaturan`, this.divisiList()).subscribe({
      next: () => {
        this.divisiSuccess.set('Pengaturan divisi berhasil disimpan.');
        this.divisiSaving.set(false);
        setTimeout(() => this.divisiSuccess.set(''), 3000);
      },
      error: () => {
        this.divisiError.set('Gagal menyimpan. Silakan coba lagi.');
        this.divisiSaving.set(false);
      }
    });
  }

  // ── Jadwal ────────────────────────────────────────────
  loadJadwal() {
    this.jadwalLoading.set(true);
    this.http.get<any>(`${environment.apiUrl}/lembur/jadwal-setting`).subscribe({
      next: data => {
        if (data) {
          this.cegahPresensiTanpaJadwal.set(data.cegahPresensiTanpaJadwal ?? false);
          this.kirimNotifikasiJadwal.set(data.kirimNotifikasiJadwal ?? true);
          this.menitSebelumJadwal.set(data.menitSebelumJadwal ?? null);
        }
        this.jadwalLoading.set(false);
      },
      error: () => { this.jadwalLoading.set(false); }
    });
  }

  saveJadwal() {
    this.jadwalSaving.set(true);
    this.jadwalError.set('');
    this.jadwalSuccess.set('');
    const payload = {
      cegahPresensiTanpaJadwal: this.cegahPresensiTanpaJadwal(),
      kirimNotifikasiJadwal: this.kirimNotifikasiJadwal(),
      menitSebelumJadwal: this.menitSebelumJadwal()
    };
    this.http.post(`${environment.apiUrl}/lembur/jadwal-setting`, payload).subscribe({
      next: () => {
        this.jadwalSuccess.set('Pengaturan jadwal berhasil disimpan.');
        this.jadwalSaving.set(false);
        setTimeout(() => this.jadwalSuccess.set(''), 3000);
      },
      error: () => {
        this.jadwalError.set('Gagal menyimpan. Silakan coba lagi.');
        this.jadwalSaving.set(false);
      }
    });
  }
}

