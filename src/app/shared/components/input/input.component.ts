import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  inject,
  viewChild,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent implements ControlValueAccessor {
  ngControl = inject(NgControl);
  @ViewChild('input') input: ElementRef<HTMLInputElement> | undefined;

  constructor() {
    this.ngControl.valueAccessor = this;
  }

  @Input()
  label: string = '';
  @Input()
  type: string = 'text';
  @Input()
  placeholder: string = '';
  @Input()
  inputValue: string = '';

  value: string = '';
  onChange: any = (value: string) => {};
  onTouch: any = () => {};
  disabled: boolean = false;

  setValue(value: string): void {
    this.value = value;
  }

  writeValue(value: string): void {
    this.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: any): void {
    this.setValue(event.target.value);
    this.onChange(this.value);
  }
}
