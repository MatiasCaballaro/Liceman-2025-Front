import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
  { path: '', component: LandingComponent }, // Landing page as the main route
  // { path: 'login', component: AuthComponent },
  // { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login by default
];
