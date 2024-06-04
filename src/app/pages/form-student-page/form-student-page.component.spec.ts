import { ComponentFixture, TestBed } from '@angular/core/testing';


import { FormStudentPageComponent } from './form-student-page.component';
import { ActivatedRoute, Router } from '@angular/router';

describe('FormStudentPageComponent', () => {
  let component: FormStudentPageComponent;
  let fixture: ComponentFixture<FormStudentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormStudentPageComponent],
      providers: [{ provide: ActivatedRoute, useValue: { params: [] }}]
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
