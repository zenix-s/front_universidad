import { Component, Input, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  listTipoConvenio,
  TipoConvenio,
  Genero,
  listGenero,
} from '@app/core/entities/interfaces.entity';
import { StudentsService } from '@app/core/services/students-service/students.service';
import { Router } from '@angular/router';
import { SectionComponent } from '@app/shared/components/section/section.component';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { SelectComponent } from '@app/shared/components/select/select.component';
import { InputComponent } from '@app/shared/components/input/input.component';
import { DateInputComponent } from '@app/shared/components/date-input/date-input.component';
import { FormStudentService } from './services/form-student.service';
import { ToasterService } from '../../core/toaster/service/toaster.service';
import { MatriculaFormService } from '../../shared/components/matricula-form/matricula-form.service';
import { TableComponent } from '@app/shared/components/table/table.component';
import { MatriculasService } from '@app/core/services/matriculas-service/matriculas.service';
import { Matricula } from '@app/core/entities/Matricula.entity';
import { Subject } from 'rxjs';
import { MatriculaFormComponent } from '@app/shared/components/matricula-form/matricula-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-student-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SectionComponent,
    ButtonComponent,
    SelectComponent,
    InputComponent,
    DateInputComponent,
    TableComponent,
    MatriculaFormComponent,
  ],
  templateUrl: './form-student-page.component.html',
  styleUrl: './form-student-page.component.css',
})
export class FormStudentPageComponent implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  private studentService = inject(StudentsService);
  private router = inject(Router);
  formStudentService = inject(FormStudentService);
  private ToasterService = inject(ToasterService);
  matriculaFormService = inject(MatriculaFormService);
  matriculaService = inject(MatriculasService);

  // param idExpediente
  @Input() idExpediente?: string;

  mode: 'create' | 'edit' = 'create';
  tab = signal<'datos' | 'matriculas'>('datos')
  editHeader = '';

  changeTab(tab: 'datos' | 'matriculas') {
    this.tab.set(tab);
  }

  private ngUnsubscribe = new Subject<void>();

  studentForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellidos: ['', Validators.required],
    documentoIdentidad: ['', Validators.required],
    fechaNacimiento: [null as Date | null, Validators.required],
    nacionalidad: ['', Validators.required],
    direccion: ['', Validators.required],
    sexo: [null as Genero | null, Validators.required],
    tipoConvenio: [null as TipoConvenio | null, Validators.required],
  });

  matriculas: Matricula[] = [];
  idExpeditente: string = '';

  get listTipoConvenio() {
    return listTipoConvenio.map((tipoConvenio) => {
      return {
        label: tipoConvenio.charAt(0).toUpperCase() + tipoConvenio.slice(1),
        value: tipoConvenio,
      };
    });
  }

  get listSexo() {
    return listGenero.map((genero) => {
      return {
        label: genero.charAt(0).toUpperCase() + genero.slice(1),
        value: genero,
      };
    });
  }

  onSubmit() {
    if (!this.studentForm.valid) {
      this.ToasterService.error('Formulario inválido');
      return;
    }
    if (this.formStudentService.student !== null) {
      this.studentService.updateStudent({
        ...this.formStudentService.student,
        nombre: this.studentForm.value.nombre
          ? this.studentForm.value.nombre
          : '',
        apellidos: this.studentForm.value.apellidos
          ? this.studentForm.value.apellidos
          : '',
        documentoIdentidad: this.studentForm.value.documentoIdentidad
          ? this.studentForm.value.documentoIdentidad
          : '',
        fechaNacimiento: this.studentForm.value.fechaNacimiento
          ? this.studentForm.value.fechaNacimiento
          : new Date(),
        nacionalidad: this.studentForm.value.nacionalidad
          ? this.studentForm.value.nacionalidad
          : '',
        direccion: this.studentForm.value.direccion
          ? this.studentForm.value.direccion
          : '',
        sexo: this.studentForm.value.sexo
          ? this.studentForm.value.sexo
          : 'Otro',
        tipoConvenio: this.studentForm.value.tipoConvenio
          ? this.studentForm.value.tipoConvenio
          : 'propio',
      });
    }
    this.studentService.addStudent({
      numeroExpediente: '0',
      nombre: this.studentForm.value.nombre
        ? this.studentForm.value.nombre
        : '',
      apellidos: this.studentForm.value.apellidos
        ? this.studentForm.value.apellidos
        : '',
      documentoIdentidad: this.studentForm.value.documentoIdentidad
        ? this.studentForm.value.documentoIdentidad
        : '',
      fechaNacimiento: this.studentForm.value.fechaNacimiento
        ? this.studentForm.value.fechaNacimiento
        : new Date(),
      nacionalidad: this.studentForm.value.nacionalidad
        ? this.studentForm.value.nacionalidad
        : '',
      direccion: this.studentForm.value.direccion
        ? this.studentForm.value.direccion
        : '',
      sexo: this.studentForm.value.sexo ? this.studentForm.value.sexo : 'Otro',
      tipoConvenio: this.studentForm.value.tipoConvenio
        ? this.studentForm.value.tipoConvenio
        : 'propio',
    });
    this.router.navigate(['/student/search']);
  }

  clearForm() {
    this.studentForm.reset();
  }

  openMatricula(matricula: Matricula) {
    this.matriculaFormService.matricula = matricula;
    this.matriculaFormService.open();
  }

  updateMatriculas() {
    this.matriculas = this.matriculaService.getMatriculasByExpediente(
      this.idExpeditente
    );
  }


  ngOnInit(): void {
    if (!this.idExpediente) {
      return;
    }
    const estudiante = this.studentService.getEstudiante(this.idExpediente);
    if (estudiante) {
      this.formStudentService.student = estudiante;
      this.idExpeditente = this.idExpediente;
      this.matriculas = this.matriculaService.getMatriculasByExpediente(
        this.idExpediente
      );
      this.mode = 'edit';
      this.editHeader = `${estudiante.numeroExpediente} ${estudiante.nombre}`;
    }

    if (this.formStudentService.student !== null) {
      const estudiante = this.formStudentService.student;
      this.studentForm.patchValue({
        nombre: estudiante.nombre ? estudiante.nombre : '',
        apellidos: estudiante.apellidos,
        documentoIdentidad: estudiante.documentoIdentidad,
        fechaNacimiento: estudiante.fechaNacimiento,
        nacionalidad: estudiante.nacionalidad,
        direccion: estudiante.direccion,
        sexo: estudiante.sexo,
        tipoConvenio: estudiante.tipoConvenio,
      });
    }
  }

  ngOnDestroy(): void {
    this.formStudentService.student = null;

    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
