import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onLogin(credentials: { email: string; password: string }) {
    this.authService.login(credentials).subscribe({
      next: (response) => {
        localStorage.setItem('authToken', response.accessToken);
        localStorage.setItem('refreshToken', response.refreshToken);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Login failed', err);
      }
    });
  }
}