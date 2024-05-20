import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { InputComponent } from '@app/shared/components/input/input.component';
import { SectionComponent } from '@app/shared/components/section/section.component';
import { SelectComponent } from '@app/shared/components/select/select.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { PaginationComponent } from '@app/shared/components/pagination/pagination.component';
import { SearchStudentsService } from '@app/core/services/search-student-service/search-students.service';
import { StudentsService } from '@app/core/services/students-service/students.service';
import { EstadoMatriculacion, TipoConvenio, listEstadoMatriculacion, listTipoConvenio } from '@app/core/entities/interfaces.entity';

@Component({
  selector: 'app-search-student-page',
  standalone: true,
  imports: [ReactiveFormsModule, SectionComponent, SelectComponent, InputComponent, ButtonComponent, StudentsTableComponent, PaginationComponent],
  templateUrl: './search-student-page.component.html',
  styleUrl: './search-student-page.component.css'
})
export class SearchStudentPageComponent implements OnInit, OnDestroy{
  private fb = inject(FormBuilder);
  searchStudentsService = inject(SearchStudentsService);
  StudentsService = inject(StudentsService);

  searchForm: FormGroup = this.fb.group({
    nombre: [null, Validators.required],
    apellidos: [null, Validators.required],
    universidad: [null, Validators.required],
    estadoMatricula: [null, Validators.required],
    tipoConvenio: [null, Validators.required],
    numeroExpediente: [null, Validators.required],
  });

  onSubmit() {
    this.searchStudentsService.filterBySearch({
      nExpediente: this.searchForm.value.numeroExpediente as string,
      nombre: this.searchForm.value.nombre as string,
      apellidos: this.searchForm.value.apellidos as string,
      estadoMatricula: this.searchForm.value.estadoMatricula as EstadoMatriculacion,
      tipoConvenio: this.searchForm.value.tipoConvenio as TipoConvenio,
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

  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
