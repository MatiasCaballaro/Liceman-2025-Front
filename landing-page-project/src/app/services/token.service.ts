import { Injectable } from '@angular/core';
import { AuthenticationControllerService } from '../api/api/authenticationController.service';
import { AuthenticationResponse } from '../api/model/authenticationResponse';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private authService: AuthenticationControllerService) {}

  storeTokens(response: AuthenticationResponse): void {
    localStorage.setItem('accessToken', response.accessToken);
    localStorage.setItem('refreshToken', response.refreshToken);
  }

  getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  getRefreshToken(): string | null {
    return localStorage.getItem('refreshToken');
  }

  clearTokens(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }

  refreshAccessToken(): Promise<AuthenticationResponse> {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      return Promise.reject('No refresh token available');
    }

    return this.authService.refreshToken({ refreshToken }).toPromise()
      .then(response => {
        this.storeTokens(response);
        return response;
      });
  }
}