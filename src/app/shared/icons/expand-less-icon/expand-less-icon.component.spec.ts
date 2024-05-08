import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandLessIconComponent } from './expand-less-icon.component';

describe('ExpandLessIconComponent', () => {
  let component: ExpandLessIconComponent;
  let fixture: ComponentFixture<ExpandLessIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpandLessIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpandLessIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
