import { Component } from '@angular/core';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private sidebarService: SidebarService) {}

  get isSidebarOpen() {
    return this.sidebarService.isSidebarOpen$;
  }
}
