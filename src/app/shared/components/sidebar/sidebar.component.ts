import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { SidebarService } from '@app/core/services/sidebar-service/sidebar.service';

@Component({
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

  ngOnInit(): void {
    this.sidebarService.sidebarState$.subscribe((state) => {
      this.isOpen = state;
    });
  }
}
