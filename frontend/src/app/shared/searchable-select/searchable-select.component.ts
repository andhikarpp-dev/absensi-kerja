import {
  Component, Input, OnChanges, SimpleChanges,
  forwardRef, signal, computed, ElementRef, HostListener, ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

export interface SelectOption {
  value: number | string | null;
  label: string;
}

@Component({
  selector: 'app-searchable-select',
  standalone: true,
  imports: [FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchableSelectComponent),
      multi: true
    }
  ],
  template: `
    <div class="ss-wrapper" [class.ss-open]="isOpen()" [class.ss-disabled]="disabled">

      <!-- Trigger -->
      <div class="ss-trigger form-select d-flex align-items-center justify-content-between"
           [class.ss-placeholder]="selectedLabel() === placeholder"
           (click)="toggle()">
        <span class="ss-selected-label text-truncate">{{ selectedLabel() }}</span>
        <i class="bx ms-1 flex-shrink-0"
           [class.bx-chevron-down]="!isOpen()"
           [class.bx-chevron-up]="isOpen()"></i>
      </div>

      <!-- Dropdown -->
      @if (isOpen()) {
        <div class="ss-dropdown shadow-sm">

          <!-- Search input -->
          <div class="ss-search-wrap px-2 pt-2 pb-1">
            <div class="input-group input-group-sm">
              <span class="input-group-text bg-white border-end-0">
                <i class="bx bx-search text-muted"></i>
              </span>
              <input #searchInput
                     type="text"
                     class="form-control border-start-0 ps-0"
                     [placeholder]="searchPlaceholder"
                     [ngModel]="searchQuery()"
                     (ngModelChange)="searchQuery.set($event)"
                     (click)="$event.stopPropagation()" />
            </div>
          </div>

          <!-- Options list -->
          <ul class="ss-options list-unstyled mb-0">
            @if (showClear) {
              <li class="ss-option ss-option-clear"
                  [class.ss-active]="value === null || value === undefined || value === ''"
                  (click)="select(null)">
                <i class="bx bx-x me-1"></i>{{ placeholder }}
              </li>
            }
            @if (filteredOptions().length === 0) {
              <li class="ss-option ss-no-result text-muted">
                <i class="bx bx-search-alt me-1"></i>Tidak ada hasil
              </li>
            }
            @for (opt of filteredOptions(); track opt.value) {
              <li class="ss-option"
                  [class.ss-active]="opt.value === value"
                  (click)="select(opt.value)">
                {{ opt.label }}
              </li>
            }
          </ul>

        </div>
      }

    </div>
  `,
  styles: [`
    .ss-wrapper {
      position: relative;
    }
    .ss-trigger {
      cursor: pointer;
      user-select: none;
      min-height: 38px;
    }
    .ss-wrapper.ss-disabled .ss-trigger {
      background-color: #e9ecef;
      pointer-events: none;
      opacity: 0.65;
    }
    .ss-placeholder {
      color: #6c757d;
    }
    .ss-selected-label {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .ss-dropdown {
      position: absolute;
      top: calc(100% + 2px);
      left: 0;
      right: 0;
      z-index: 1055;
      background: #fff;
      border: 1px solid #dee2e6;
      border-radius: 0.375rem;
      overflow: hidden;
    }
    .ss-options {
      max-height: 220px;
      overflow-y: auto;
    }
    .ss-option {
      padding: 7px 14px;
      cursor: pointer;
      font-size: 0.875rem;
      transition: background 0.1s;
    }
    .ss-option:hover {
      background-color: #f0f4ff;
    }
    .ss-option.ss-active {
      background-color: #e7efff;
      color: #0d6efd;
      font-weight: 500;
    }
    .ss-option-clear {
      color: #6c757d;
      border-bottom: 1px solid #f0f0f0;
      font-style: italic;
    }
    .ss-no-result {
      pointer-events: none;
      font-style: italic;
      font-size: 0.8rem;
    }
    .ss-search-wrap .form-control:focus {
      box-shadow: none;
      border-color: #dee2e6;
    }
  `]
})
export class SearchableSelectComponent implements ControlValueAccessor, OnChanges {

  @Input() options: SelectOption[] = [];
  @Input() placeholder = '-- Pilih --';
  @Input() searchPlaceholder = 'Cari...';
  @Input() showClear = true;
  @Input() disabled = false;

  @ViewChild('searchInput') searchInputRef?: ElementRef<HTMLInputElement>;

  value: number | string | null = null;
  searchQuery = signal('');
  isOpen = signal(false);

  private onChange: (v: any) => void = () => {};
  private onTouched: () => void = () => {};

  private _options = signal<SelectOption[]>([]);

  filteredOptions = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    const opts = this._options();
    if (!q) return opts;
    return opts.filter(o => o.label.toLowerCase().includes(q));
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['options']) {
      this._options.set(this.options ?? []);
    }
  }

  selectedLabel(): string {
    if (this.value === null || this.value === undefined || this.value === '') {
      return this.placeholder;
    }
    return this._options().find(o => o.value === this.value)?.label ?? this.placeholder;
  }

  toggle(): void {
    if (this.disabled) return;
    this.isOpen.update(v => !v);
    if (this.isOpen()) {
      this.searchQuery.set('');
      // Fokus ke input search setelah render
      setTimeout(() => this.searchInputRef?.nativeElement.focus(), 50);
    }
  }

  select(val: number | string | null): void {
    this.value = val;
    this.onChange(val);
    this.onTouched();
    this.isOpen.set(false);
    this.searchQuery.set('');
  }

  /** Tutup dropdown jika klik di luar */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const el = (event.target as HTMLElement);
    if (!el.closest('.ss-wrapper')) {
      this.isOpen.set(false);
    }
  }

  // ── ControlValueAccessor ────────────────────────────────

  writeValue(val: any): void {
    this.value = val ?? null;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
