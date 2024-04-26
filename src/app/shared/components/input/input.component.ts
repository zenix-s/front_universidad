import { Component, Input, inject } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
// export class InputComponent implements ControlValueAccessor{
export class InputComponent {
  // ngControl = inject(NgControl);

  // constructor() {
  //   this.ngControl.valueAccessor = this;
  // }

  @Input()
  label: string = '';
  @Input()
  type: string = 'text';
  @Input()
  placeholder: string = '';
  @Input()
  inputValue: string = '';

  value: string = '';
  onChange: any = () => {};
  onTouch: any = () => {};
  disabled: boolean = false;

  writeValue(obj: string): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
