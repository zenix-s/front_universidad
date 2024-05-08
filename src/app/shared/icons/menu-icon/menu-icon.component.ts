import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-icon',
  templateUrl: './menu-icon.component.html',
  styleUrl: './menu-icon.component.css'
})
export class MenuIconComponent {
  @Input()
  color: string = 'currentcolor';
  @Input()
  width: string = '24';
  @Input()
  height: string = '24';
}
