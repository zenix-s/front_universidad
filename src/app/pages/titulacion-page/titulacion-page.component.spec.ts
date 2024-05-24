import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitulacionPageComponent } from './titulacion-page.component';

describe('TitulacionPageComponent', () => {
  let component: TitulacionPageComponent;
  let fixture: ComponentFixture<TitulacionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitulacionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitulacionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
