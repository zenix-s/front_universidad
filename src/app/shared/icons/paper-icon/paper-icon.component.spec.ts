import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperIconComponent } from './paper-icon.component';

describe('PaperIconComponent', () => {
  let component: PaperIconComponent;
  let fixture: ComponentFixture<PaperIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaperIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaperIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
