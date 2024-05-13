import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import {
  SearchFilters,
  SearchStudentsService,
  orderType
} from '@app/core/services/search-student-service/search-students.service';
import { StudentsService } from '@app/core/services/students-service/students.service';
import { IconsModule } from '@app/shared/icons/icons.module';
import { SharedModule } from '@app/shared/shared.module';
import { Alumno } from '@types';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrl: './students-table.component.css',
  imports: [SharedModule, IconsModule],
})
export class StudentsTableComponent implements OnInit, OnDestroy {
  searchStudentsService = inject(SearchStudentsService);
  private studentsService = inject(StudentsService);

  students: WritableSignal<Alumno[]> = signal<Alumno[]>([]);
  filteredStudents: WritableSignal<Alumno[]> = signal<Alumno[]>([]);

  studentsSubscription!: Subscription;



  nextPage() {
    this.searchStudentsService.nextPage();
    this.filteredStudents.set(
      this.searchStudentsService.filterStudents(this.students())
    );
  }

  previousPage() {
    this.searchStudentsService.previousPage();
    this.filteredStudents.set(
      this.searchStudentsService.filterStudents(this.students())
    );
  }

  filterByColumn(column: keyof Alumno) {
    console.log('filtering by column', column);
    this.searchStudentsService.filterByColumn(column);
    this.filteredStudents.set(
      this.searchStudentsService.filterStudents(this.students())
    );
  }

  ngOnInit(): void {
    this.studentsService.getstudents();
    this.studentsSubscription = this.studentsService.students$.subscribe(
      (students) => {
        this.students.set(students);
        this.filteredStudents.set(
          this.searchStudentsService.filterStudents(students)
        );
        this.searchStudentsService.totalPage = Math.ceil(
          students.length / this.searchStudentsService.filters.pageSize
        );
      }
    );
  }

  ngOnDestroy(): void {
    this.studentsSubscription.unsubscribe();
  }
}
