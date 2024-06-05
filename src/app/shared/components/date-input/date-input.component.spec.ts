import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DateInputComponent } from './date-input.component';
import { FormsModule, ReactiveFormsModule, NgControl } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('DateInputComponent', () => {
  let component: DateInputComponent;
  let fixture: ComponentFixture<DateInputComponent>;
  let ngControl: Partial<NgControl>;

  beforeEach(async () => {
    ngControl = {
      valueAccessor: null
    };

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, DateInputComponent],
      providers: [
        { provide: NgControl, useValue: ngControl }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deberia crearse', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia mostrar el label', () => {
    component.label = 'Test Label';
    fixture.detectChanges();
    const labelElement = fixture.debugElement.query(By.css('label'));
    expect(labelElement.nativeElement.textContent).toBe('Test Label');
  });

  it('Deberia actualizar el valor', () => {
    const date = new Date('2023-01-01');
    component.writeValue(date);
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(inputElement.value).toBe('2023-01-01');
  });

  it('onChange y onTouch deberia llamarse al escribir en el input', () => {
    spyOn(component, 'onChange');
    spyOn(component, 'onTouch');

    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    inputElement.value = '2023-01-02';
    inputElement.dispatchEvent(new Event('input'));

    expect(component.onChange).toHaveBeenCalledWith(new Date('2023-01-02'));
    expect(component.onTouch).toHaveBeenCalled();
  });

  it('Deberia desactivar el componente', () => {
    component.setDisabledState(true);
    fixture.detectChanges();
    expect(component.disabled).toBeTruthy();
  });

  it('Deberia activar el componente', () => {
    component.setDisabledState(false);
    fixture.detectChanges();
    expect(component.disabled).toBeFalsy();
  });
});
