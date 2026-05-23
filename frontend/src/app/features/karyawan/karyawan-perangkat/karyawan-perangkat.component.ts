import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { KaryawanService } from '../../../core/services/karyawan.service';
import { PerangkatKaryawan } from '../../../core/models/karyawan.model';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-karyawan-perangkat',
  standalone: true,
  imports: [RouterLink, CommonModule, LayoutComponent],
  templateUrl: './karyawan-perangkat.component.html',
  styleUrl: './karyawan-perangkat.component.scss'
})
export class KaryawanPerangkatComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private svc   = inject(KaryawanService);

  karyawanId    = signal<number>(0);
  namaKaryawan  = signal<string>('');
  fotoProfil    = signal<string | undefined>(undefined);

  list    = signal<PerangkatKaryawan[]>([]);
  loading = signal(true);
  error   = signal('');

  confirmRevokeId = signal<number | null>(null);
  revoking        = signal(false);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.karyawanId.set(id);

    // Muat data karyawan untuk nama dan foto
    this.svc.findById(id).subscribe({
      next: k => {
        this.namaKaryawan.set(k.namaLengkap);
        this.fotoProfil.set(k.fotoProfil);
      }
    });

    this.loadPerangkat(id);
  }

  loadPerangkat(id: number): void {
    this.loading.set(true);
    this.error.set('');
    this.svc.getPerangkat(id).subscribe({
      next: data => { this.list.set(data); this.loading.set(false); },
      error: ()  => { this.error.set('Gagal memuat data perangkat.'); this.loading.set(false); }
    });
  }

  fotoUrl(path?: string): string | null {
    if (!path) return null;
    if (path.startsWith('http')) return path;
    return `${environment.baseUrl}/${path}`;
  }

  confirmRevoke(id: number): void {
    this.confirmRevokeId.set(id);
  }

  cancelRevoke(): void {
    this.confirmRevokeId.set(null);
  }

  doRevoke(): void {
    const devId = this.confirmRevokeId();
    if (devId == null) return;
    this.revoking.set(true);
    this.svc.deletePerangkat(this.karyawanId(), devId).subscribe({
      next: () => {
        this.list.update(l => l.filter(d => d.id !== devId));
        this.confirmRevokeId.set(null);
        this.revoking.set(false);
      },
      error: () => {
        this.error.set('Gagal mencabut perangkat.');
        this.confirmRevokeId.set(null);
        this.revoking.set(false);
      }
    });
  }

  formatTerakhirAktif(dt?: string): string {
    if (!dt) return '—';
    const d = new Date(dt);
    const hari = d.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' });
    const jam  = d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    return `${hari} @ ${jam}`;
  }

  isAktifBaru(dt?: string): boolean {
    if (!dt) return false;
    const sevenDays = 7 * 24 * 60 * 60 * 1000;
    return (Date.now() - new Date(dt).getTime()) < sevenDays;
  }
}
