import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-settings-icon',
  templateUrl: './settings-icon.component.html',
  styleUrl: './settings-icon.component.css'
})
export class SettingsIconComponent {
  @Input()
  width: string = '24px';
  @Input()
  height: string = '24px';
  @Input()
  color: string = 'currentcolor';

}
