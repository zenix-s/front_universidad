import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ue-icon',
  templateUrl: './ue-icon.component.html',
  styleUrl: './ue-icon.component.css'
})
export class UeIconComponent {
  @Input()
  height: string = '24px';
  width: string = '24px';
}
