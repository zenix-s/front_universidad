import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  WritableSignal,
  effect,
  inject,
  signal,
} from '@angular/core';
import { SidebarService } from '@app/shared/components/sidebar/sidebar-service/sidebar.service';
import { SidebarNavItemComponent } from './sidebar-nav-item/sidebar-nav-item.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { UeLogoComponent } from '../ue-logo/ue-logo.component';

@Component({
  standalone: true,
  imports: [CommonModule, SidebarNavItemComponent, SubmenuComponent, UeLogoComponent],
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  sidebarService = inject(SidebarService);
  elementRef = inject(ElementRef<HTMLElement>);
  private _isOpen: WritableSignal<boolean> = signal(false);

  get isOpen() {
    return this._isOpen();
  }

  set isOpen(value: boolean) {
    this._isOpen.set(value);
  }

  close() {
    this.sidebarService.close();
  }

  open() {
    this.sidebarService.open();
  }

  constructor() {
    effect(() => {
      if (this.isOpen) {
      } else {
      }
    });
  }

  ngOnInit(): void {
    this.sidebarService.sidebarState$.subscribe((state) => {
      this.isOpen = state;
    });
  }
}
