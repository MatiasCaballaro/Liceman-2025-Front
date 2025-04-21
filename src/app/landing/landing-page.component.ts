import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationControllerService } from '../api/api/authenticationController.service';
import { AuthenticationRequest } from '../api/model/authenticationRequest';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(
    private authService: AuthenticationControllerService,
    private router: Router
  ) {}

  onSubmit() {
    const authRequest: AuthenticationRequest = {
      email: this.email,
      password: this.password
    };

    this.authService.authenticate(authRequest).subscribe(
      (response) => {
        if (response.access_token && response.refresh_token) {
          localStorage.setItem('access_token', response.access_token);
          localStorage.setItem('refresh_token', response.refresh_token);
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = 'Invalid credentials';
        }
      },
      (error) => {
        this.errorMessage = 'Invalid credentials';
        console.error(error);
      }
    );
  }
}