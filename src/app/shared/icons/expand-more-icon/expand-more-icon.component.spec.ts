import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandMoreIconComponent } from './expand-more-icon.component';

describe('ExpandMoreIconComponent', () => {
  let component: ExpandMoreIconComponent;
  let fixture: ComponentFixture<ExpandMoreIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpandMoreIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpandMoreIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
