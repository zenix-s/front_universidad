import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Teme test', () => {
    const testCases = [
      { themeType: 'primary', expectedClass: 'btn-primary' },
      { themeType: 'secondary', expectedClass: 'btn-secondary' },
      { themeType: 'outline', expectedClass: 'btn-outline' },
      { themeType: 'light', expectedClass: 'btn-light' },
      { themeType: 'dark', expectedClass: 'btn-dark' }
    ];

    testCases.forEach(test => {
      component.themeType = test.themeType as "primary" | "secondary" | "outline" | "light" | "dark";
      fixture.detectChanges();
      const buttonElement = fixture.debugElement.query(By.css('button'));
      expect(buttonElement.classes[test.expectedClass]).toBeTruthy();
    });
  });

  it('size test', () => {
    const testCases = [
      {
        size: 'sm', expectedClass: [
          'px-1',
          'py-0.5'
        ]
      },
      {
        size: 'md', expectedClass: [
          'px-1.5',
          'py-1'
        ]
      },
      {
        size: 'lg', expectedClass: [
          'px-2',
          'py-1.5'
        ]
      }
    ];
    testCases.forEach(test => {
      component.size = test.size as "sm" | "md" | "lg";
      fixture.detectChanges();
      const buttonElement = fixture.debugElement.query(By.css('button'));
      test.expectedClass.forEach(expectedClass => {
        expect(buttonElement.classes[expectedClass]).toBeTruthy();
      });
    });
  });

  it('disabled test', () => {
    component.disabled = true;
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement.nativeElement.disabled).toBeTruthy();
  });

  it('Shadow test', () => {
    component.shadow = true;
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement.classes['shadow-md']).toBeTruthy();
  });

  it('click emit test', () => {
    spyOn(component.onClick, 'emit');
    const buttonElement = fixture.debugElement.query(By.css('button'));
    buttonElement.triggerEventHandler('click', null);
    expect(component.onClick.emit).toHaveBeenCalled();
  });

  it('disabled theme test', () => {
    const testCases = [
      { themeType: 'primary', disabled: true, expectedClass: 'disabled-btn-primary' },
      { themeType: 'secondary', disabled: true, expectedClass: 'disabled-btn-secondary' },
      { themeType: 'outline', disabled: true, expectedClass: 'disabled-btn-outline' },
      { themeType: 'light', disabled: true, expectedClass: 'disabled-btn-light' },
      { themeType: 'dark', disabled: true, expectedClass: 'disabled-btn-dark' }
    ];

    testCases.forEach(test => {
      component.themeType = test.themeType as "primary" | "secondary" | "outline" | "light" | "dark";
      component.disabled = test.disabled;
      fixture.detectChanges();
      const buttonElement = fixture.debugElement.query(By.css('button'));
      expect(buttonElement.classes[test.expectedClass]).toBeTruthy();
    });
  });
});
