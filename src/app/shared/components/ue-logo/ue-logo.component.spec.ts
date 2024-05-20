import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UeLogoComponent } from './ue-logo.component';

describe('UeLogoComponent', () => {
  let component: UeLogoComponent;
  let fixture: ComponentFixture<UeLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UeLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UeLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
