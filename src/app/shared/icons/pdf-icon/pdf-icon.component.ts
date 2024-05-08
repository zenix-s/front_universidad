import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pdf-icon',
  templateUrl: './pdf-icon.component.html',
  styleUrl: './pdf-icon.component.css'
})
export class PdfIconComponent {
  @Input()
  color: string = 'currentcolor';
  @Input()
  width: string = '24';
  @Input()
  height: string = '24';
}
