import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { AuthenticationRequest } from './auth.model';

@Component({
  selector: 'app-login',
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" formControlName="email" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" formControlName="password" required>
      </div>
      <button type="submit" [disabled]="loginForm.invalid">Login</button>
    </form>
  `,
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const authRequest: AuthenticationRequest = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };
      this.authService.login(authRequest).subscribe({
        next: (response) => {
          console.log('Login successful', response);
          // Handle successful login (e.g., redirect)
        },
        error: (error) => {
          console.error('Login failed', error);
          // Handle login error
        },
      });
    }
  }
}