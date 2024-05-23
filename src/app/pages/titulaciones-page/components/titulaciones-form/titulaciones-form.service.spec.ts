import { TestBed } from '@angular/core/testing';

import { TitulacionesFormService } from './titulaciones-form.service';

describe('TitulacionesFormService', () => {
  let service: TitulacionesFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitulacionesFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
