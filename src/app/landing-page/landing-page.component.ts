import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule for standalone component
import { AuthenticationControllerService } from '../api/api/authenticationController.service';

@Component({
  standalone: true, // Mark as standalone
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  imports: [FormsModule] // Import FormsModule directly
})
export class LandingPageComponent {
  username = '';
  password = '';

  constructor(
    private authService: AuthenticationControllerService,
    private router: Router
  ) {}

  login() {
    const authRequest = { username: this.username, password: this.password };
    this.authService.authenticate(authRequest).subscribe({
      next: (response: any) => {
        if (response.token && response.refreshToken) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('refreshToken', response.refreshToken);
          this.router.navigate(['/dashboard']);
        } else {
          console.error('Invalid response structure', response);
        }
      },
      error: (err) => {
        console.error('Login failed', err);
      }
    });
  }
}
