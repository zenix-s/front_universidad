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
import { SearchStudentsService } from '../../../core/services/search-student-service/search-students.service';
import { SearchStudentPageModule } from '../search-student-page.module';
import { StudentsTableComponent } from '../components/students-table/students-table.component';

@Component({
  standalone: true,
  selector: 'app-search-student-page',
  templateUrl: './search-student-page.component.html',
  styleUrl: './search-student-page.component.css',
  imports: [
    ReactiveFormsModule,
    SearchStudentPageModule,
    SharedModule,
    IconsModule,
    StudentsTableComponent,
  ],
})
export class SearchStudentPageComponent implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);

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

  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
