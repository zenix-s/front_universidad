import { Component, Input, WritableSignal, inject, signal } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent implements ControlValueAccessor{
  ngControl = inject(NgControl);

  @Input()
  label: string = '';
  @Input()
  options: any[] = [];

  constructor() {
    this.ngControl.valueAccessor = this;
  }

  selectedOption: WritableSignal<any> = signal(null);

  onChange: any = () => {};
  onTouch: any = () => {};
  disabled: boolean = false;


  isOptionsVisible: boolean = false;

  toggleOptionsVisibility() {
    this.isOptionsVisible = !this.isOptionsVisible;
  }

  selectOption(option: any) {
    this.selectedOption.set(option);
    this.isOptionsVisible = false;
  }

  writeValue(obj: any): void {
    this.selectOption(obj);
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
