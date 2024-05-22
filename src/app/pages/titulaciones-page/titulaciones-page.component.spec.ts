import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitulacionesPageComponent } from './titulaciones-page.component';

describe('TitulacionesPageComponent', () => {
  let component: TitulacionesPageComponent;
  let fixture: ComponentFixture<TitulacionesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitulacionesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitulacionesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
