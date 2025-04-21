import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  imports: [SharedModule]
})
export class DashboardComponent {
  constructor() { } 
}