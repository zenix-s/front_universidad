import { TestBed } from '@angular/core/testing';

import { SearchStudentsService } from './search-students.service';

describe('SearchStudentsService', () => {
  let service: SearchStudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchStudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
