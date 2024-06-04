import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild, inject } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  providers: [],
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

  value: string | null = null;
  onChange: any = (value: Date) => {};
  onTouch: any = () => {};
  disabled: boolean = false;

  setValue(value: Date): void {
    this.value = value ? value.toISOString().substring(0, 10) : null;
    if(this.input) this.input.nativeElement.value = this.value ? this.value : '';
  }

  writeValue(obj: Date): void {
    this.setValue(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
    if (this.input){
      this.input.nativeElement.disabled = isDisabled;
    }
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value
    this.onChange(new Date(this.value));
    this.onTouch();
  }

}
