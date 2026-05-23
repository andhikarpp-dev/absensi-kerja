import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { LayoutComponent } from '../../shared/layout/layout.component';

@Component({
  selector: 'app-unauthorized',
  standalone: true,
  imports: [RouterLink, LayoutComponent],
  templateUrl: './unauthorized.component.html'
})
export class UnauthorizedComponent {
  auth = inject(AuthService);
}
