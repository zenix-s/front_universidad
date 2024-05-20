import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStudentPageComponent } from './search-student-page.component';

describe('SearchStudentPageComponent', () => {
  let component: SearchStudentPageComponent;
  let fixture: ComponentFixture<SearchStudentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchStudentPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchStudentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
