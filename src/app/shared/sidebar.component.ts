import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  userName = 'User Name';
  avatarUrl = ''; // Or a default image URL

  constructor() { }
}