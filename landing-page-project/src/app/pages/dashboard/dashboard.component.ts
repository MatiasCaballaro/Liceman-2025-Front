import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userName: string | null = null;
  userAvatar: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(): void {
    const userData = this.authService.getUserData();
    if (userData) {
      this.userName = userData.name;
      this.userAvatar = userData.avatar;
    }
  }
}