import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expand-more-icon',
  templateUrl: './expand-more-icon.component.html',
  styleUrl: './expand-more-icon.component.css'
})
export class ExpandMoreIconComponent {
  @Input()
  color: string = 'currentcolor';
  @Input()
  height: number = 24;
  @Input()
  width: number = 24;
}
