import { Component, inject } from '@angular/core';
import { SidebarService } from '@app/core/services/sidebar-service/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  sidevarService = inject(SidebarService);

  openSidebar() {
    this.sidevarService.open();
  }
}
