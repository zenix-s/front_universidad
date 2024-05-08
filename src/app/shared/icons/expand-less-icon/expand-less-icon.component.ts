import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expand-less-icon',
  templateUrl: './expand-less-icon.component.html',
  styleUrl: './expand-less-icon.component.css'
})
export class ExpandLessIconComponent {
  @Input()
  color: string = 'currentcolor';
  @Input()
  height: number = 24;
  @Input()
  width: number = 24;
}
