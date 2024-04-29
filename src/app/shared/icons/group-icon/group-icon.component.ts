import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-group-icon',
  templateUrl: './group-icon.component.html',
  styleUrl: './group-icon.component.css',
})
export class GroupIconComponent {
  @Input()
  color: string = 'black';
  @Input()
  height: number = 24;
  @Input()
  width: number = 24;
}
