import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UeIconComponent } from './ue-icon.component';

describe('UeIconComponent', () => {
  let component: UeIconComponent;
  let fixture: ComponentFixture<UeIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UeIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
