import { Injectable } from '@angular/core';
import { AuthenticationControllerService } from '../api/api/authenticationController.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(private authService: AuthenticationControllerService) {}

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  refreshToken(): void {
    this.authService.refreshToken().subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('refreshToken', response.refreshToken);
      },
      error: (err) => {
        console.error('Token refresh failed', err);
      }
    });
  }
}
