import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IconsModule } from '@app/shared/icons/icons.module';
import { SharedModule } from '@app/shared/shared.module';
import { listTipoConvenio } from '@app/core/entities/interfaces.entity';
import { StudentsService } from '@app/core/services/students-service/students.service';
import { EstadoMatriculacion, TipoConvenio } from '@app/core/entities/interfaces.entity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-student-page',
  standalone: true,
  imports: [SharedModule, IconsModule, ReactiveFormsModule],
  templateUrl: './form-student-page.component.html',
  styleUrl: './form-student-page.component.css',
})
export class FormStudentPageComponent {
  private fb = inject(FormBuilder);
  private studentService = inject(StudentsService);
  private router = inject(Router);

  studentForm = this.fb.group({
    nombre: [null, Validators.required],
    apellidos: [null, Validators.required],
    documentoIdentidad: [null, Validators.required],
    fechaNacimiento: [null, Validators.required],
    nacionalidad: [null, Validators.required],
    direccion: [null, Validators.required],
    sexo: [null, Validators.required],
    tipoConvenio: [null, Validators.required],
  });

  get listTipoConvenio() {
    return listTipoConvenio.map((tipoConvenio) => {
      return {
        // label: tipoConvenio.capitalize(),
        label: tipoConvenio.charAt(0).toUpperCase() + tipoConvenio.slice(1),
        value: tipoConvenio,
      };
    });
  }

  get listSexo() {
    return ['hombre', 'mujer', 'otro', 'teapot'].map((sexo) => {
      return {
        label: sexo.charAt(0).toUpperCase() + sexo.slice(1),
        value: sexo,
      };
    });
  }

  onSubmit() {
    // console.log(this.studentForm.value);
    this.studentService.addStudent({
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
      estadoMatriculacion: 'Activo',
      numeroExpediente: '24000022',
      sexo: this.studentForm.value.sexo ? this.studentForm.value.sexo : '',
      tipoConvenio: this.studentForm.value.tipoConvenio
        ? this.studentForm.value.tipoConvenio
        : 'propio',
    });
    this.router.navigate(['/student/search']);
  }

  clearForm() {
    this.studentForm.reset();
  }
}
