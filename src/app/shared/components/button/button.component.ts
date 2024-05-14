import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input()
  themeType: 'primary' | 'secondary' | 'outline' | 'light' | 'dark' = 'primary';
  @Input()
  size: 'sm' | 'md' | 'lg' = 'md';
  @Input()
  htmlType: 'button' | 'submit' | 'reset' = 'button';
  @Input()
  disabled: boolean = false;

  @Input()
  shadow: boolean = false;

  @Output()
  onClick = new EventEmitter<void>();
}
