import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = new FormControl('');
  password = new FormControl('');
  isLoading: boolean = false;

  loginError: string = '';
  showLoginForm: boolean = true;

  constructor() {}

  login() {
    this.loginError = '';

    if (this.email.value === 'test' && this.password.value === 'test') {
      this.isLoading = true;
      this.showLoginForm = false;
      localStorage.setItem('isLoggedIn', 'true');

      setTimeout(() => {
        window.location.href = '/home';
      }, 2000);
    }
    else if(this.email.value === 'admin' && this.password.value === 'admin') {
      this.isLoading = true;
            this.showLoginForm = false;
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('isAdmin', 'true');

            setTimeout(() => {
              window.location.href = '/home';
            }, 2000);
          }
    else {
      this.loginError = 'Hibás felhasználónév vagy jelszó!';
    }
  }
}
