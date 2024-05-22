import { Component, inject } from '@angular/core';
import { SidebarService } from '@app/shared/components/sidebar/sidebar-service/sidebar.service';
import { UeLogoComponent } from '../ue-logo/ue-logo.component';

@Component({
  standalone: true,
  imports: [UeLogoComponent],
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
