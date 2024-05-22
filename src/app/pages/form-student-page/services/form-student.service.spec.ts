import { TestBed } from '@angular/core/testing';

import { FormStudentService } from './form-student.service';

describe('FormStudentService', () => {
  let service: FormStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
