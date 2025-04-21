import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <aside class="sidebar">
      <nav>
        <ul>
          <li routerLink="/users" routerLinkActive="active">
            <a>Users</a>
          </li>
          <li routerLink="/trainings" routerLinkActive="active">
            <a>Trainings</a>
          </li>
          <li routerLink="/udemy-statistics" routerLinkActive="active">
            <a>Udemy - Statistics</a>
          </li>
          <li routerLink="/udemy-learning-paths" routerLinkActive="active">
            <a>Udemy - Learning Paths</a>
          </li>
          <li routerLink="/udemy-courses" routerLinkActive="active">
            <a>Udemy - Courses</a>
          </li>
        </ul>
      </nav>
    </aside>
  `,
  styles: [`
    .sidebar {
      width: 250px;
      background-color: #f0f0f0;
      padding: 20px;
      height: 100vh;
    }

    .sidebar ul {
      list-style: none;
      padding: 0;
    }

    .sidebar li {
      margin-bottom: 10px;
    }

    .sidebar a {
      text-decoration: none;
      color: #333;
      display: block;
      padding: 8px;
    }

    .sidebar a:hover {
      background-color: #ddd;
    }

    .active {
      background-color: #ddd;
    }
  `]
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
}