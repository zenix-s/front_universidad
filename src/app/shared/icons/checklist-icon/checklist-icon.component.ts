import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checklist-icon',
  templateUrl: './checklist-icon.component.html',
  styleUrl: './checklist-icon.component.css',
})
export class ChecklistIconComponent {
  @Input()
  color: string = 'currentcolor';
  @Input()
  height: number = 24;
  @Input()
  width: number = 24;
}
