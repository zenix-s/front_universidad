import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStudentPageComponent } from './form-student-page.component';

describe('FormStudentPageComponent', () => {
  let component: FormStudentPageComponent;
  let fixture: ComponentFixture<FormStudentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormStudentPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormStudentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
