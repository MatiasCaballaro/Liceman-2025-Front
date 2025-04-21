import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingModule } from './landing/landing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  imports: [
    AppComponent,
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    DashboardModule,
    SharedModule,
    AuthModule
  ],
  providers: []
})
export class AppModule { }