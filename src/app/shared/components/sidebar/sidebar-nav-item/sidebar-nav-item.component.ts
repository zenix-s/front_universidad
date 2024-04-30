import { Component, Input } from '@angular/core';

@Component({
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
    return true;
  }

  toggleCollapsed(): void {
    this.isOpen = !this.isOpen;
  }

  hasChildren(): boolean {
    return this.url === undefined;
  }
}
