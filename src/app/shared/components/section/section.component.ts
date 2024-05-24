import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {
  @Input()
  title: string = '';

  @Input()
  divider: boolean = false;
}
