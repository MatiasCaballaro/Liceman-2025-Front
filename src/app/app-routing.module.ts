import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component'; // Import standalone component
import { DashboardComponent } from './dashboard/dashboard.component'; // Import DashboardComponent

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'dashboard', component: DashboardComponent } // Use component instead of loadChildren
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
