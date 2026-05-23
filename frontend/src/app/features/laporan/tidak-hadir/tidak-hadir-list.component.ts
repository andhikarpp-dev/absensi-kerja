import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { environment } from '../../../../environments/environment';
import { Karyawan } from '../../../core/models/karyawan.model';
import {
  TidakHadirMingguanService,
  TidakHadirMingguanResponse,
} from '../../../core/services/tidak-hadir-mingguan.service';

@Component({
  selector: 'app-tidak-hadir-list',
  standalone: true,
  imports: [CommonModule, FormsModule, LayoutComponent],
  templateUrl: './tidak-hadir-list.component.html',
})
export class TidakHadirListComponent implements OnInit {
  private svc = inject(TidakHadirMingguanService);

  days = 7;
  data = signal<TidakHadirMingguanResponse | null>(null);
  loading = signal(false);
  error = signal('');

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.error.set('');
    this.svc.findTidakHadir(this.days).subscribe({
      next: (res) => {
        this.data.set(res);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err?.message || 'Gagal memuat data');
        this.loading.set(false);
      },
    });
  }

  fotoUrl(foto?: string | null): string {
    if (!foto) return 'assets/images/avatars/avatar-1.png';
    if (foto.startsWith('http')) return foto;
    return `${environment.baseUrl}/${foto.replace(/^\/+/, '')}`;
  }
}
