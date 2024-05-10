import {
  Component,
  OnDestroy,
  OnInit,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { IconsModule } from '@app/shared/icons/icons.module';
import { SharedModule } from '@app/shared/shared.module';
import {
  Alumno,
  listEstadoMatriculacion,
  listTipoConvenio,
} from '@app/core/entities/interfaces';
import { StudentsService } from '@app/core/services/students-service/students.service';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-search-student-page',
  templateUrl: './search-student-page.component.html',
  styleUrl: './search-student-page.component.css',
  imports: [ReactiveFormsModule, SharedModule, IconsModule],
})
export class SearchStudentPageComponent implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  private studentsService = inject(StudentsService);

  students: WritableSignal<Alumno[]> = signal<Alumno[]>([]);
  filteredStudents: WritableSignal<Alumno[]> = signal<Alumno[]>([]);

  private filters = {
    nombre: '',
    apellidos: '',
    universidad: '',
    estadoMatricula: '',
    tipoConvenio: '',
    numeroExpediente: '',
  };

  page: number = 1;
  pageSize: number = 5;
  totalPage: number = 0;

  order: string = 'asc';
  orderBy: keyof Alumno = 'apellidos'

  studentsSubscription!: Subscription;

  searchForm: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    universidad: ['', Validators.required],
    estadoMatricula: ['', Validators.required],
    tipoConvenio: ['', Validators.required],
    numeroExpediente: ['', Validators.required],
  });

  get listEstadoMatriculacion() {
    return listEstadoMatriculacion.map((estado) => ({
      value: estado,
      label: estado,
    }));
  }
  get listTipoConvenio() {
    return listTipoConvenio.map((tipo) => ({
      value: tipo,
      label: tipo,
    }));
  }

  nextPage() {
    this.page++;
    this.filteredStudents.set(this.filterStudents(this.students()));
  }

  previousPage() {
    this.page--;
    this.filteredStudents.set(this.filterStudents(this.students()));
  }

  filterStudents(students: Alumno[]): Alumno[] {
    // const newFilteredStudents: Alumno[] = [];

    const startIndex = (this.page - 1) * this.pageSize;

    const endIndex = Math.min(startIndex + this.pageSize, students.length);

    const nombre: string = '';

    // students.map((student) => {
    //     newFilteredStudents.push(student);
    // }).slice(startIndex, endIndex);

    const newFilteredStudents = students
      .filter((student) => {
        if (
          nombre.length > 0 &&
          !student.nombre.toLowerCase().includes(nombre.toLowerCase())
        ) {
          return false;
        }
        return true;
      })
      .sort((a:Alumno, b:Alumno) => {
        // return a.nombre.localeCompare(b.nombre);
        const valueA = a[this.orderBy] as string;
        const valueB = b[this.orderBy] as string;
        if (this.order === 'asc') {
          return valueA.localeCompare(valueB);
        } else {
          return valueB.localeCompare(valueA);
        }
      })
      .slice(startIndex, endIndex);

    return newFilteredStudents;
  }

  ngOnInit(): void {
    this.studentsService.getstudents();
    this.studentsSubscription = this.studentsService.students$.subscribe(
      (students) => {
        this.students.set(students);
        // this.filteredStudents.set(students);
        this.filteredStudents.set(this.filterStudents(students));
        this.totalPage = Math.ceil(students.length / this.pageSize);
      }
    );
  }
  ngOnDestroy(): void {
    this.studentsSubscription.unsubscribe();
  }
}
