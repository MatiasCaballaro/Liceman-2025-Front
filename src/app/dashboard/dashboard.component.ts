import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user = {
    name: 'John Doe',
    avatar: 'https://via.placeholder.com/150'
  };
}
