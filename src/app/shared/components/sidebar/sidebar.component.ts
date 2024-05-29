import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
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
import { RouterLink, RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    SidebarNavItemComponent,
    SubmenuComponent,
    UeLogoComponent,
    RouterLink,
    RouterModule
  ],
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit, OnDestroy {
  sidebarService = inject(SidebarService);
  elementRef = inject(ElementRef<HTMLElement>);
  private _isOpen: WritableSignal<boolean> = signal(false);

  private ngUnsubscribe = new Subject<void>();

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

  ngOnInit(): void {
    this.sidebarService.sidebarState$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((state) => {
        this.isOpen = state;
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
