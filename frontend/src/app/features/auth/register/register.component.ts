import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  selectedRole: 'employee' | 'owner' | null = null;
  showEmployeeInfo = false;

  constructor(private router: Router) {}

  selectRole(role: 'employee' | 'owner') {
    this.selectedRole = role;
  }

  onContinue() {
    if (this.selectedRole === 'owner') {
      this.router.navigate(['/auth/register-owner']);
    } else if (this.selectedRole === 'employee') {
      this.showEmployeeInfo = true;
    }
  }

  closeEmployeeInfo() {
    this.showEmployeeInfo = false;
  }
}
