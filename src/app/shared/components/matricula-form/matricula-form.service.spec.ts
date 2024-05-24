import { TestBed } from '@angular/core/testing';

import { MatriculaFormService } from './matricula-form.service';

describe('MatriculaFormService', () => {
  let service: MatriculaFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatriculaFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
