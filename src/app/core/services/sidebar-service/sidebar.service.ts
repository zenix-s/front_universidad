import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private _sidebarState = new BehaviorSubject<boolean>(false);

  sidebarState$ = this._sidebarState.asObservable();

  toggle() {
    this._sidebarState.next(!this._sidebarState.value);
    console.log('toggle', this._sidebarState.value);
  }

  close() {
    this._sidebarState.next(false);
  }

  open() {
    this._sidebarState.next(true);
  }



  constructor() { }
}
