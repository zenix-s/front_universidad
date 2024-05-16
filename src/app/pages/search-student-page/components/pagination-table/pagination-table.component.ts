import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Alumno } from '@app/core/entities/interfaces';
import { SearchStudentsService } from '@app/core/services/search-student-service/search-students.service';
import { StudentsService } from '@app/core/services/students-service/students.service';

@Component({
  selector: 'app-pagination-table',
  templateUrl: './pagination-table.component.html',
  styleUrl: './pagination-table.component.css',
})
export class PaginationTableComponent implements OnInit, OnDestroy {
  searchStudentsService = inject(SearchStudentsService);
  StudentsService = inject(StudentsService);

  get totalStudents() {
    let total = 0;
    return this.searchStudentsService.searchInformation.totalStudents;
  }

  nextPage() {
    this.searchStudentsService.nextPage();
    this.StudentsService.students$.subscribe((students) => {
      this.searchStudentsService.filterStudents(students);
    });
  }

  previousPage() {
    this.searchStudentsService.previousPage();
    this.StudentsService.students$.subscribe((students) => {
      this.searchStudentsService.filterStudents(students);
    });
  }

  goToPage(page: number) {
    this.searchStudentsService.goToPage(page);
    this.StudentsService.students$.subscribe((students) => {
      this.searchStudentsService.filterStudents(students);
    });
  }

  filterByColumn(column: keyof Alumno) {
    this.searchStudentsService.filterByColumn(column);
    this.StudentsService.students$.subscribe((students) => {
      this.searchStudentsService.filterStudents(students);
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
