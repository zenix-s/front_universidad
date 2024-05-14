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
  orderType,
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
  filterStudentsSubscription!: Subscription;

  filterByColumn(column: keyof Alumno) {
    this.searchStudentsService.filterByColumn(column);
    this.searchStudentsService.filterStudents(this.students());
  }

  ngOnInit(): void {
    this.studentsService.getstudents();
    this.studentsSubscription = this.studentsService.students$.subscribe(
      (students) => {
        this.students.set(students);
        this.searchStudentsService.filterStudents(students);
        this.searchStudentsService.totalPage = Math.ceil(
          students.length / this.searchStudentsService.filters.pageSize
        );
      }
    );
    this.filterStudentsSubscription =
      this.searchStudentsService.filteredStudents$.subscribe((students) => {
        this.filteredStudents.set(students);
      });
  }

  ngOnDestroy(): void {
    this.studentsSubscription.unsubscribe();
    this.filterStudentsSubscription.unsubscribe();
  }
}
