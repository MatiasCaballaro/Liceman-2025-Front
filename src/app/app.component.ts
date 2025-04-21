import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule for standalone component

@Component({
  standalone: true, // Mark as standalone
  selector: 'app-root',
  template: '<router-outlet></router-outlet>', // Basic template with router outlet
  imports: [RouterModule] // Import RouterModule
})
export class AppComponent {
  title = 'Liceman-frontend-2025-OpenApi';
}
