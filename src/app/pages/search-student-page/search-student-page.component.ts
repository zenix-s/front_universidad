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
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { InputComponent } from '@app/shared/components/input/input.component';
import { SectionComponent } from '@app/shared/components/section/section.component';
import { SelectComponent } from '@app/shared/components/select/select.component';
import { PaginationComponent } from '@app/shared/components/pagination/pagination.component';
import { SearchStudentsService } from './search-student-service/search-students.service';
import { StudentsService } from '@app/core/services/students-service/students.service';
import {
  EstadoMatriculacion,
  TipoConvenio,
  listEstadoMatriculacion,
  listTipoConvenio,
} from '@app/core/entities/interfaces.entity';
import { Alumno } from '@app/core/entities/Alumno.entity';
import { Subscription } from 'rxjs';
import { TableComponent } from '@app/shared/components/table/table.component';
import { FormStudentService } from '../form-student-page/services/form-student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-student-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    SectionComponent,
    SelectComponent,
    InputComponent,
    ButtonComponent,
    PaginationComponent,
    TableComponent,
  ],
  templateUrl: './search-student-page.component.html',
  styleUrl: './search-student-page.component.css',
})
export class SearchStudentPageComponent implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  searchStudentsService = inject(SearchStudentsService);
  studentsService = inject(StudentsService);
  studentForm = inject(FormStudentService);
  router = inject(Router);

  students: WritableSignal<Alumno[]> = signal<Alumno[]>([]);
  filteredStudents: WritableSignal<Alumno[]> = signal<Alumno[]>([]);

  subscripciones: Subscription[] = [];

  searchForm: FormGroup = this.fb.group({
    nombre: [null, Validators.required],
    apellidos: [null, Validators.required],
    nacionalidad: [null, Validators.required],
    estadoMatricula: [null, Validators.required],
    tipoConvenio: [null, Validators.required],
    numeroExpediente: [null, Validators.required],
  });

  onSubmit() {
    this.searchStudentsService.filterBySearch({
      nExpediente: this.searchForm.value.numeroExpediente as string,
      nombre: this.searchForm.value.nombre as string,
      apellidos: this.searchForm.value.apellidos as string,
      estadoMatricula: this.searchForm.value
        .estadoMatricula as EstadoMatriculacion,
      tipoConvenio: this.searchForm.value.tipoConvenio as TipoConvenio,
      nacionalidad: this.searchForm.value.nacionalidad as string,
    });
  }

  clearForm() {
    this.searchForm.reset();
    this.searchStudentsService.clearFilters();
  }

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

  doordie() {
    // // console.log(this.studentsService.generarNumeroExpediente())
    // console.log(this.students().map((student) => {
    //   if (student.tipoConvenio == 'propio') {
    //     student.nacionalidad = 'España'
    //   }
    //   if(student.tipoConvenio == 'extranjero'){
    //     const bool = Math.random() < 0.5;
    //     if (bool) student.nacionalidad = 'Francia';
    //     else student.nacionalidad = 'Alemania';
    //   }
    //   return student;
    // }));
  }

  getNacionalidades() {
    const nacionalidades: { value: string; label: string }[] = [];
    this.students()
      .map((student) => student.nacionalidad)
      .forEach((nacionalidad) => {
        if (!nacionalidades.find((n) => n.value === nacionalidad)) {
          nacionalidades.push({ value: nacionalidad, label: nacionalidad.charAt(0).toUpperCase() + nacionalidad.slice(1)});
        }
      });
    return nacionalidades;
  }

  rowClicked(student: Alumno) {
    this.studentForm.student = student;
    this.router.navigate(['student/form']);
  }

  ngOnInit(): void {
    this.studentsService.getstudents();
    this.subscripciones.push(
      this.studentsService.students$.subscribe((students) => {
        this.students.set(students);
        this.searchStudentsService.filterStudents(students);
      })
    );
    this.subscripciones.push(
      this.searchStudentsService.filteredStudents$.subscribe((students) => {
        this.filteredStudents.set(students);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscripciones.forEach((sub) => sub.unsubscribe());
  }
}
