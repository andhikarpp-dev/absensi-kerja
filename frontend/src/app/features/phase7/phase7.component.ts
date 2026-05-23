import { Component } from '@angular/core';
import { LayoutComponent } from '../../shared/layout/layout.component';

@Component({
  selector: 'app-phase7',
  standalone: true,
  imports: [LayoutComponent],
  template: `
    <app-layout>
      <div class="d-flex align-items-center justify-content-center" style="min-height:60vh">
        <div class="text-center">
          <i class='bx bx-time-five' style="font-size:4rem;color:#7c3aed"></i>
          <h4 class="mt-3 fw-semibold">Segera Hadir</h4>
          <p class="text-muted">Halaman ini akan dikembangkan pada Phase 7.</p>
        </div>
      </div>
    </app-layout>
  `
})
export class Phase7Component {}
