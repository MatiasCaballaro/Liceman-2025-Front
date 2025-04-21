import { Injectable } from '@angular/core';
import { AuthenticationControllerService } from '../api/api/authenticationController.service';
import { AuthenticationRequest } from '../api/model/authenticationRequest';
import { AuthenticationResponse } from '../api/model/authenticationResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private authService: AuthenticationControllerService) {}

  login(email: string, password: string) {
    const request: AuthenticationRequest = { email, password };
    return this.authService.authenticate(request).subscribe((response: AuthenticationResponse) => {
      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('refreshToken', response.refreshToken);
    });
  }

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('accessToken');
  }
}