import { Component, input } from '@angular/core';

@Component({
  selector: 'app-test-comp',
  standalone: true,
  imports: [],
  templateUrl: './test-comp.component.html',
  styleUrl: './test-comp.component.css'
})
export class TestCompComponent {
  title = input.required<string>()
}
