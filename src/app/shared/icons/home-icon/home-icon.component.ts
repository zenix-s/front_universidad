import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-icon',
  templateUrl: './home-icon.component.html',
  styleUrl: './home-icon.component.css'
})
export class HomeIconComponent {
  @Input()
  width = '24';
  @Input()
  height = '24';
  @Input()
  color = 'currentcolor';
}
