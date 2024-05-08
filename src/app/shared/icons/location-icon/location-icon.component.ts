import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-location-icon',
  templateUrl: './location-icon.component.html',
  styleUrl: './location-icon.component.css'
})
export class LocationIconComponent {
  @Input()
  width = '24';
  @Input()
  height = '24';
  @Input()
  color = 'currentcolor';
}
