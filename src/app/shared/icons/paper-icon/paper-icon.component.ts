import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paper-icon',
  templateUrl: './paper-icon.component.html',
  styleUrl: './paper-icon.component.css'
})
export class PaperIconComponent {
  @Input()
  width = '24';
  @Input()
  height = '24';
  @Input()
  color = 'black';
}
