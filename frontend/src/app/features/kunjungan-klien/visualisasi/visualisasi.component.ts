import {
  Component, inject, signal, OnInit, AfterViewInit,
  OnDestroy, ElementRef, ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KunjunganKlienService } from '../../../core/services/kunjungan-klien.service';
import { DivisiService } from '../../../core/services/divisi.service';
import { KunjunganKlien, Klien } from '../../../core/models/kunjungan-klien.model';
import { Divisi } from '../../../core/models/divisi.model';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { environment } from '../../../../environments/environment';

declare const L: any;

@Component({
  selector: 'app-visualisasi',
  standalone: true,
  imports: [CommonModule, FormsModule, LayoutComponent],
  templateUrl: './visualisasi.component.html',
  styleUrl: './visualisasi.component.scss'
})
export class VisualisasiComponent implements OnInit, AfterViewInit, OnDestroy {
  private svc       = inject(KunjunganKlienService);
  private divisiSvc = inject(DivisiService);

  readonly apiBase = environment.apiUrl.replace('/api', '');

  @ViewChild('mapContainer') mapContainerRef!: ElementRef;
  private map: any;
  private markersLayer: any;

  loading    = signal(false);
  error      = signal('');
  allData    = signal<KunjunganKlien[]>([]);
  klienList  = signal<Klien[]>([]);
  divisiList = signal<Divisi[]>([]);

  // Filters
  filterTanggal = signal('');
  filterDivisi  = signal<number | null>(null);
  filterKlien   = signal<number | null>(null);
  filterCari    = signal('');
  _cariInput    = signal('');

  hasSearched = signal(false);

  // Selected visit for detail panel
  selected = signal<KunjunganKlien | null>(null);

  ngOnInit() {
    this.svc.getAllKlien().subscribe({ next: d => this.klienList.set(d) });
    this.divisiSvc.findAll().subscribe({ next: (d: Divisi[]) => this.divisiList.set(d) });
  }

  ngAfterViewInit() {
    // Map will be initialized after search when container is visible
  }

  ngOnDestroy() {
    if (this.map) { this.map.remove(); this.map = null; }
  }

  applyFilter() {
    if (!this.filterTanggal()) return;
    this.filterCari.set(this._cariInput());
    this.hasSearched.set(true);
    this.loading.set(true);
    this.error.set('');
    this.svc.getAllKunjungan({
      divisiId: this.filterDivisi() ?? undefined,
      klienId:  this.filterKlien()  ?? undefined,
      from: this.filterTanggal(),
      to:   this.filterTanggal(),
      cari: this.filterCari() || undefined,
    }).subscribe({
      next: res => {
        this.allData.set(res);
        this.loading.set(false);
        setTimeout(() => this.initOrRefreshMap(), 100);
      },
      error: () => { this.error.set('Gagal memuat data.'); this.loading.set(false); }
    });
  }

  private initOrRefreshMap() {
    if (!this.mapContainerRef) return;
    const data = this.allData();

    if (!this.map) {
      this.map = L.map(this.mapContainerRef.nativeElement).setView([-2.5, 117.5], 5);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(this.map);
      this.markersLayer = L.layerGroup().addTo(this.map);
    } else {
      this.markersLayer.clearLayers();
    }

    const bounds: any[] = [];

    data.forEach(k => {
      // Start marker
      if (k.lokasiMulaiLat && k.lokasiMulaiLng) {
        const icon = this.createIcon('#4f46e5', 'M');
        const m = L.marker([k.lokasiMulaiLat, k.lokasiMulaiLng], { icon })
          .bindPopup(this.buildPopup(k, 'mulai'))
          .on('click', () => this.selected.set(k));
        this.markersLayer.addLayer(m);
        bounds.push([k.lokasiMulaiLat, k.lokasiMulaiLng]);
      }
      // End marker
      if (k.lokasiSelesaiLat && k.lokasiSelesaiLng) {
        const icon = this.createIcon('#16a34a', 'S');
        const m = L.marker([k.lokasiSelesaiLat, k.lokasiSelesaiLng], { icon })
          .bindPopup(this.buildPopup(k, 'selesai'))
          .on('click', () => this.selected.set(k));
        this.markersLayer.addLayer(m);
        bounds.push([k.lokasiSelesaiLat, k.lokasiSelesaiLng]);
      }
      // Line between start and end
      if (k.lokasiMulaiLat && k.lokasiMulaiLng && k.lokasiSelesaiLat && k.lokasiSelesaiLng) {
        const line = L.polyline([
          [k.lokasiMulaiLat, k.lokasiMulaiLng],
          [k.lokasiSelesaiLat, k.lokasiSelesaiLng]
        ], { color: '#6366f1', weight: 2, dashArray: '5,5', opacity: 0.7 });
        this.markersLayer.addLayer(line);
      }
    });

    if (bounds.length > 0) {
      this.map.fitBounds(bounds, { padding: [40, 40] });
    }

    setTimeout(() => this.map.invalidateSize(), 200);
  }

  private createIcon(color: string, letter: string) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36">
      <path d="M14 0C6.268 0 0 6.268 0 14c0 9.333 14 22 14 22S28 23.333 28 14C28 6.268 21.732 0 14 0z" fill="${color}"/>
      <text x="14" y="18" text-anchor="middle" fill="white" font-size="11" font-weight="bold" font-family="sans-serif">${letter}</text>
    </svg>`;
    return L.divIcon({
      html: svg,
      className: '',
      iconSize: [28, 36],
      iconAnchor: [14, 36],
      popupAnchor: [0, -36]
    });
  }

  private buildPopup(k: KunjunganKlien, type: 'mulai' | 'selesai'): string {
    const time = type === 'mulai' ? k.waktuMulai : k.waktuSelesai;
    return `<div style="min-width:160px;font-size:13px">
      <b>${k.namaKaryawan ?? '-'}</b><br>
      Klien: ${k.namaKlien ?? '-'}<br>
      ${type === 'mulai' ? 'Mulai' : 'Selesai'}: ${time ? new Date(time).toLocaleTimeString('id-ID', {hour:'2-digit',minute:'2-digit'}) : '-'}
    </div>`;
  }

  formatTime(dt?: string): string {
    if (!dt) return '-';
    return new Date(dt).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  }

  formatDuration(start?: string, end?: string): string {
    if (!start || !end) return '-';
    const diff = new Date(end).getTime() - new Date(start).getTime();
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    return `${h}j ${m}m`;
  }

  fotoUrl(path?: string): string {
    if (!path) return 'assets/images/avatars/avatar-1.png';
    return `${this.apiBase}/uploads/${path}`;
  }

  get filteredData(): KunjunganKlien[] {
    let data = this.allData();
    const cari = this.filterCari().toLowerCase();
    if (cari) data = data.filter(d =>
      (d.namaKaryawan ?? '').toLowerCase().includes(cari) ||
      (d.namaKlien ?? '').toLowerCase().includes(cari)
    );
    return data;
  }
}
