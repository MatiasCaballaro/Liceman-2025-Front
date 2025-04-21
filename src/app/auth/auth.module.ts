import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationControllerService } from '../api/api/authenticationController.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthenticationControllerService
  ]
})
export class AuthModule { }