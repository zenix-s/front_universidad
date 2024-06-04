import { Component, Input, inject } from '@angular/core';
import { SidebarService } from '@app/shared/components/sidebar/sidebar-service/sidebar.service';
import { UeLogoComponent } from '../ue-logo/ue-logo.component';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [UeLogoComponent, BreadcrumbsComponent, RouterLink],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [SidebarService]
})
export class HeaderComponent {
  @Input() breadcrumbs: {
    label: string;
    url: string;
  }[] = [];

  sidevarService = inject(SidebarService);

  openSidebar() {
    this.sidevarService.open();
  }
}
