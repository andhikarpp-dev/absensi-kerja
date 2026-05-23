import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../core/services/auth.service';
import { environment } from '../../../environments/environment';

interface HealthData {
  app: string;
  version: string;
  status: string;
  timestamp: string;
}

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {

  private auth   = inject(AuthService);
  private router = inject(Router);
  private http   = inject(HttpClient);

  apiStatus  = signal<'checking' | 'online' | 'offline'>('checking');
  apiVersion = signal<string>('-');
  menuOpen   = signal<boolean>(false);
  openFaq    = signal<number | null>(null);

  readonly year = new Date().getFullYear();

  readonly features = [
    {
      icon: 'schedule',
      title: 'Check-In & Check-Out',
      desc: 'Catat kehadiran karyawan secara real-time dengan akurasi waktu yang tepat.'
    },
    {
      icon: 'people',
      title: 'Manajemen Karyawan',
      desc: 'Kelola data karyawan, jabatan, dan departemen dalam satu tempat.'
    },
    {
      icon: 'bar_chart',
      title: 'Laporan Absensi',
      desc: 'Lihat dan ekspor laporan kehadiran per periode dengan filter lengkap.'
    },
    {
      icon: 'verified_user',
      title: 'Akses Berbasis Role',
      desc: 'Hak akses terpisah untuk Admin dan Karyawan demi keamanan data.'
    }
  ];

  readonly faqItems = [
    {
      q: 'Apakah data absensi tersimpan secara aman?',
      a: 'Ya. Semua data dienkripsi dan disimpan di server dengan akses berbasis role sehingga hanya pengguna berwenang yang dapat melihatnya.'
    },
    {
      q: 'Bisakah digunakan dari perangkat mobile?',
      a: 'Tentu! Tampilan Absensi Kerja sepenuhnya responsif dan dapat diakses dari smartphone, tablet, maupun desktop.'
    },
    {
      q: 'Bagaimana cara admin menambah karyawan baru?',
      a: 'Admin cukup masuk ke menu Manajemen Karyawan, klik tombol Tambah, lalu isi data karyawan dan assign role yang sesuai.'
    },
    {
      q: 'Apakah tersedia fitur ekspor laporan?',
      a: 'Paket Pro dan Enterprise mendukung ekspor laporan ke format PDF dan Excel untuk keperluan administrasi.'
    },
    {
      q: 'Berapa batas karyawan untuk paket gratis?',
      a: 'Paket Starter gratis mendukung hingga 10 karyawan aktif tanpa biaya apapun.'
    }
  ];

  readonly blogPosts = [
    {
      icon: 'tips_and_updates',
      tag: 'Tips',
      title: '5 Cara Meningkatkan Kedisiplinan Karyawan dengan Sistem Absensi Digital',
      excerpt: 'Sistem absensi digital bukan sekadar pencatat waktu — ini adalah alat strategis untuk membangun budaya kerja yang disiplin.',
      date: '28 Mar 2026'
    },
    {
      icon: 'security',
      tag: 'Keamanan',
      title: 'Mengapa JWT + Role-Based Access Penting untuk Aplikasi HR?',
      excerpt: 'Memahami bagaimana autentikasi berbasis token melindungi data sensitif karyawan dari akses yang tidak sah.',
      date: '20 Mar 2026'
    },
    {
      icon: 'bar_chart',
      tag: 'Laporan',
      title: 'Cara Membaca Laporan Absensi untuk Evaluasi Kinerja Bulanan',
      excerpt: 'Panduan lengkap memanfaatkan fitur laporan Absensi Kerja untuk evaluasi kehadiran dan produktivitas tim Anda.',
      date: '12 Mar 2026'
    }
  ];

  toggleFaq(i: number): void {
    this.openFaq.set(this.openFaq() === i ? null : i);
  }

  ngOnInit(): void {
    // Redirect jika sudah login
    if (this.auth.isLoggedIn()) {
      const role = this.auth.currentUser()?.role;
      this.router.navigate([role === 'KARYAWAN' ? '/absensi' : '/dashboard']);
      return;
    }
    this.checkApiHealth();
  }

  private checkApiHealth(): void {
    this.http.get<HealthData>(`${environment.apiUrl}/health`).subscribe({
      next: (data) => {
        this.apiStatus.set('online');
        this.apiVersion.set(data?.version ?? '1.0.0');
      },
      error: () => this.apiStatus.set('offline')
    });
  }

  goToLogin(): void {
    this.router.navigate(['/auth/login']);
  }

  goToRegister(): void {
    this.router.navigate(['/daftar']);
  }
}
