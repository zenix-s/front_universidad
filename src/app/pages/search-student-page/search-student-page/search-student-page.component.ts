import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { IconsModule } from '@app/shared/icons/icons.module';
import { SharedModule } from '@app/shared/shared.module';


@Component({
  standalone: true,
  selector: 'app-search-student-page',
  templateUrl: './search-student-page.component.html',
  styleUrl: './search-student-page.component.css',
  imports: [ReactiveFormsModule, SharedModule, IconsModule]
})
export class SearchStudentPageComponent {
  fb = inject(FormBuilder);

  searchForm:FormGroup = this.fb.group({
    tipoAlumno: ['', Validators.required],
    calificaciones: ['', Validators.required],
    periodo: ['', Validators.required],
    provincia: ['', Validators.required],
    expediente: ['', Validators.required],
  });
}
