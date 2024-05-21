import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild, inject } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-date-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date-input.component.html',
  styleUrl: './date-input.component.css'
})
export class DateInputComponent implements ControlValueAccessor{

  ngControl = inject(NgControl)
  @ViewChild('input') input: ElementRef<HTMLInputElement> | undefined;

  constructor() {
    this.ngControl.valueAccessor = this;
  }

  @Input()
  label: string = '';

  value: Date | null = null;
  onChange: any = (value: Date) => {};
  onTouch: any = () => {};
  disabled: boolean = false;

  setValue(value: Date): void {
    this.value = value;
  }

  writeValue(obj: Date): void {
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

  onInput(event: any): void {
    this.setValue(event.target.value);
    this.onChange(this.value);
  }

}
