import { Component, inject, signal, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormArray, FormGroup, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { JabatanService } from '../../../core/services/jabatan.service';
import { Jabatan, JabatanRequest, TargetKehadiranItem } from '../../../core/models/jabatan.model';
import { LayoutComponent } from '../../../shared/layout/layout.component';

@Component({
  selector: 'app-jabatan-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, RouterLink, LayoutComponent],
  templateUrl: './jabatan-form.component.html'
})
export class JabatanFormComponent implements OnInit {
  private fb      = inject(FormBuilder);
  private route   = inject(ActivatedRoute);
  private router  = inject(Router);
  private svc     = inject(JabatanService);

  editId   = signal<number | null>(null);
  loading  = signal(false);
  saving   = signal(false);
  error    = signal('');

  // Semua jabatan untuk dropdown induk
  jabatanList = signal<Jabatan[]>([]);

  form = this.fb.group({
    namaJabatan:          ['', [Validators.required, Validators.maxLength(100)]],
    indukId:              [null as number | null],
    targetKehadiranList:  this.fb.array([])
  });

  ngOnInit(): void {
    // Load semua jabatan untuk dropdown induk
    this.svc.findAll().subscribe({
      next: list => this.jabatanList.set(list),
      error: () => {}
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editId.set(+id);
      this.loading.set(true);
      this.svc.findById(+id).subscribe({
        next: j => {
          this.form.patchValue({
            namaJabatan: j.namaJabatan,
            indukId:     j.indukId
          });
          // Populate target kehadiran
          j.targetKehadiranList?.forEach(t => this.addTarget(t));
          this.loading.set(false);
        },
        error: () => {
          this.error.set('Data jabatan tidak ditemukan.');
          this.loading.set(false);
        }
      });
    }
  }

  // ── Target Kehadiran (FormArray) ─────────────────────────

  get targets(): FormArray {
    return this.form.get('targetKehadiranList') as FormArray;
  }

  addTarget(data?: TargetKehadiranItem): void {
    this.targets.push(this.fb.group({
      namaLokasi:   [data?.namaLokasi   ?? '', [Validators.required, Validators.maxLength(100)]],
      targetPersen: [data?.targetPersen ?? 0,  [Validators.required, Validators.min(0), Validators.max(100)]]
    }));
  }

  removeTarget(i: number): void {
    this.targets.removeAt(i);
  }

  targetGroup(i: number): FormGroup {
    return this.targets.at(i) as FormGroup;
  }

  // ── Submit ───────────────────────────────────────────────

  onSubmit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }

    this.saving.set(true);
    this.error.set('');

    const v = this.form.value;
    const req: JabatanRequest = {
      namaJabatan:         v.namaJabatan!,
      indukId:             v.indukId ?? null,
      targetKehadiranList: (v.targetKehadiranList as TargetKehadiranItem[]) ?? []
    };

    const action$ = this.editId()
      ? this.svc.update(this.editId()!, req)
      : this.svc.create(req);

    action$.subscribe({
      next: () => this.router.navigate(['/jabatan']),
      error: err => {
        this.error.set(err?.data?.message ?? err?.message ?? 'Terjadi kesalahan.');
        this.saving.set(false);
      }
    });
  }

  get f() { return this.form.controls; }
  get isEdit() { return !!this.editId(); }

  /** Jabatan yang bisa dipilih sebagai induk (semua kecuali dirinya sendiri) */
  get indukOptions(): Jabatan[] {
    const id = this.editId();
    return this.jabatanList().filter(j => j.id !== id);
  }
}
