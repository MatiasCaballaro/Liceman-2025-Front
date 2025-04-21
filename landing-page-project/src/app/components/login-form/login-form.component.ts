import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationControllerService } from '../../api/api/authenticationController.service';
import { AuthenticationRequest } from '../../api/model/authenticationRequest';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private authenticationService: AuthenticationControllerService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const authRequest: AuthenticationRequest = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };

      this.authenticationService.authenticate(authRequest).subscribe(
        response => {
          this.authService.storeTokens(response);
          this.router.navigate(['/dashboard']);
        },
        error => {
          console.error('Authentication failed', error);
        }
      );
    }
  }
}