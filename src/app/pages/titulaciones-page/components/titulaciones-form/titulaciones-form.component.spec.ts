import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitulacionesFormComponent } from './titulaciones-form.component';

describe('TitulacionesFormComponent', () => {
  let component: TitulacionesFormComponent;
  let fixture: ComponentFixture<TitulacionesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitulacionesFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitulacionesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
