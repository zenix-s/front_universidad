import { Component, Input, inject, input } from '@angular/core';
import { SidebarService } from '@app/shared/components/sidebar/sidebar-service/sidebar.service';
import { UeLogoComponent } from '../ue-logo/ue-logo.component';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';

@Component({
  standalone: true,
  imports: [UeLogoComponent, BreadcrumbsComponent],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
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
