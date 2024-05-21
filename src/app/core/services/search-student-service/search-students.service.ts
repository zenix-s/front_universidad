import {
  Injectable,
  OnDestroy,
  OnInit,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import {
  EstadoMatriculacion,
  TipoConvenio,
} from '@app/core/entities/interfaces.entity';
import { Alumno } from '@app/core/entities/Alumno.entity';
import { StudentsService } from '../students-service/students.service';

export interface SearchFilters {
  nombre: string | null;
  apellidos: string | null;
  universidad: string | null;
  estadoMatricula: EstadoMatriculacion | null;
  tipoConvenio: TipoConvenio | null;
  numeroExpediente: string | null;
  page: number;
  pageSize: number;
  order: 'asc' | 'desc';
  orderBy: keyof Alumno;
}

export interface SearchInformation {
  totalPage: number;
  totalStudents: number;
  studentsInPage: number;
}

export type orderType = 'asc' | 'desc';

@Injectable({
  providedIn: 'root',
})
export class SearchStudentsService {
  private StudentsService = inject(StudentsService);

  private _filteredStudents = new BehaviorSubject<Alumno[]>([]);

  filteredStudents$ = this._filteredStudents.asObservable();

  private studentsSub!: Subscription;

  searchInformation: SearchInformation = {
    totalPage: 0,
    totalStudents: 0,
    studentsInPage: 0,
  };

  filters: SearchFilters = {
    nombre: null,
    apellidos: null,
    universidad: null,
    estadoMatricula: null,
    tipoConvenio: null,
    numeroExpediente: null,
    page: 1,
    pageSize: 15,
    order: 'asc',
    orderBy: 'numeroExpediente',
  };

  private _filterStudents(students: Alumno[]): Alumno[] {
    const {
      nombre,
      apellidos,
      universidad,
      estadoMatricula,
      tipoConvenio,
      numeroExpediente,
      orderBy,
      order,
      page,
      pageSize,
    } = this.filters;
    const startIndex = (page - 1) * pageSize;

    const endIndex = Math.min(startIndex + pageSize, students.length);

    let newFilteredStudents = students.filter((student) => {
      return (
        (numeroExpediente
          ? student.numeroExpediente
              .toLowerCase()
              .includes(numeroExpediente.toLowerCase())
          : true) &&
        (nombre
          ? student.nombre.toLowerCase().includes(nombre.toLowerCase())
          : true) &&
        (apellidos
          ? student.apellidos.toLowerCase().includes(apellidos.toLowerCase())
          : true) &&
        (tipoConvenio
          ? student.tipoConvenio
              .toLowerCase()
              .includes(tipoConvenio.toLowerCase())
          : true) &&
        (estadoMatricula
          ? student.estadoMatriculacion
              .toLowerCase()
              .includes(estadoMatricula.toLowerCase())
          : true)
      );
    });

    this.searchInformation.totalPage = Math.ceil(
      newFilteredStudents.length / pageSize
    );
    this.searchInformation.totalStudents = newFilteredStudents.length;

    newFilteredStudents = newFilteredStudents
      .sort((a: Alumno, b: Alumno) => {
        const valueA = a[this.filters.orderBy] as string;
        const valueB = b[this.filters.orderBy] as string;
        if (this.filters.order === 'asc') {
          return valueA.localeCompare(valueB);
        } else {
          return valueB.localeCompare(valueA);
        }
      })
      .slice(startIndex, endIndex);
    this.searchInformation.studentsInPage = newFilteredStudents.length;

    return newFilteredStudents;
  }

  filterStudents(students: Alumno[]) {
    const newFilteredStudents = this._filterStudents(students);
    this._filteredStudents.next(newFilteredStudents);
  }

  nextPage() {
    if (this.filters.page >= this.searchInformation.totalPage) return;
    this.filters.page++;
    // this.filterStudents(this._students());
    this._filteredStudents.next(
      this._filterStudents(this.StudentsService.getStudentsSnapshot())
    );
  }

  previousPage() {
    if (this.filters.page <= 1) return;
    this.filters.page--;
    this._filteredStudents.next(
      this._filterStudents(this.StudentsService.getStudentsSnapshot())
    );
  }

  setTotalPage(totalPage: number) {
    if (this.filters.page > totalPage) this.filters.page = totalPage;
    this.searchInformation.totalPage = totalPage;
  }

  setPageSize(pageSize: number) {
    this.filters.pageSize = pageSize;
    this.filters.page = 1;
  }

  goToPage(page: number) {
    if (page > this.searchInformation.totalPage)
      this.filters.page = this.searchInformation.totalPage;
    if (page < 1) this.filters.page = 1;
    this.filters.page = page;

    this._filteredStudents.next(
      this._filterStudents(this.StudentsService.getStudentsSnapshot())
    );
  }

  orderByColumn(column: keyof Alumno, order: orderType) {
    this.filters.order = order;
    this.filters.orderBy = column;

    this._filteredStudents.next(
      this._filterStudents(this.StudentsService.getStudentsSnapshot())
    );
  }

  filterBySearch({
    nExpediente,
    nombre,
    apellidos,
    tipoConvenio,
    estadoMatricula,
  }: {
    nExpediente: string;
    nombre: string;
    apellidos: string;
    tipoConvenio: TipoConvenio;
    estadoMatricula: EstadoMatriculacion;
  }) {
    this.filters.numeroExpediente = nExpediente;
    this.filters.nombre = nombre;
    this.filters.apellidos = apellidos;
    this.filters.tipoConvenio = tipoConvenio;
    this.filters.estadoMatricula = estadoMatricula;
    this.filters.page = 1;

    this._filteredStudents.next(
      this._filterStudents(this.StudentsService.getStudentsSnapshot())
    );
  }

  clearFilters() {
    this.filters = {
      numeroExpediente: '',
      nombre: '',
      apellidos: '',
      universidad: '',
      estadoMatricula: null,
      tipoConvenio: null,
      page: 1,
      pageSize: 10,
      order: 'asc',
      orderBy: 'numeroExpediente',
    };

    this._filteredStudents.next(
      this._filterStudents(this.StudentsService.getStudentsSnapshot())
    );
  }
}
