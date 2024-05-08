import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logout-icon',
  templateUrl: './logout-icon.component.html',
  styleUrl: './logout-icon.component.css'
})
export class LogoutIconComponent {
  @Input()
  width: string = '24px';
  @Input()
  height: string = '24px';
  @Input()
  color: string = 'currentcolor';
}
