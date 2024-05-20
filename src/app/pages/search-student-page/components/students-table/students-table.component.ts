import {
  Component,
  OnDestroy,
  OnInit,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { SearchStudentsService } from '@app/core/services/search-student-service/search-students.service';
import { StudentsService } from '@app/core/services/students-service/students.service';
import { IconsModule } from '@app/shared/icons/icons.module';
import { SharedModule } from '@app/shared/shared.module';
import { Alumno } from "@app/core/entities/Alumno";
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
    this.searchStudentsService.orderByColumn(column);
  }

  ngOnInit(): void {
    this.studentsService.getstudents();
    this.studentsSubscription = this.studentsService.students$.subscribe(
      (students) => {
        this.students.set(students);
        this.searchStudentsService.filterStudents(students);
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
