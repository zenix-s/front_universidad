import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  selector: 'app-sidebar-nav-item',
  templateUrl: './sidebar-nav-item.component.html',
  styleUrl: './sidebar-nav-item.component.css',
})
export class SidebarNavItemComponent {
  @Input()
  label!: string;
  @Input()
  url!: string;
  @Input()
  hasSubmenu: boolean = false;

  isOpen  = false ;

  isActive(): boolean {
    return false;
  }

  toggleCollapsed(): void {
    this.isOpen = !this.isOpen;
  }

  hasChildren(): boolean {
    return this.url === undefined;
  }
}
