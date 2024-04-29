import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clock-icon',
  templateUrl: './clock-icon.component.html',
  styleUrl: './clock-icon.component.css'
})
export class ClockIconComponent {
  @Input()
  width = '24';
  @Input()
  height = '24';
  @Input()
  color = 'black';
}
