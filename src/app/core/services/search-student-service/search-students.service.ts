import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Alumno } from '@types';

export interface SearchFilters {
  nombre: string;
  apellidos: string;
  universidad: string;
  estadoMatricula: string;
  tipoConvenio: string;
  numeroExpediente: string;
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
  private _filteredStudents = new BehaviorSubject<Alumno[]>([]);

  filteredStudents$ = this._filteredStudents.asObservable();

  searchInformation: SearchInformation = {
    totalPage: 0,
    totalStudents: 0,
    studentsInPage: 0,
  };

  filters: SearchFilters = {
    nombre: '',
    apellidos: '',
    universidad: '',
    estadoMatricula: '',
    tipoConvenio: '',
    numeroExpediente: '',
    page: 1,
    pageSize: 10,
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
        student.numeroExpediente
          .toLowerCase()
          .includes(numeroExpediente.toLowerCase()) &&
        student.nombre.toLowerCase().includes(nombre.toLowerCase()) &&
        student.apellidos.toLowerCase().includes(apellidos.toLowerCase()) &&
        student.tipoConvenio.toLowerCase().includes(tipoConvenio.toLowerCase())
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
    this.filters.page++;
  }

  previousPage() {
    this.filters.page--;
  }

  setTotalPage(totalPage: number) {
    this.searchInformation.totalPage = totalPage;
  }

  setPageSize(pageSize: number) {
    this.filters.pageSize = pageSize;
  }

  goToPage(page: number) {
    // if (page > this.totalPage) this.filters.page = this.totalPage;
    if (page > this.searchInformation.totalPage)
      this.filters.page = this.searchInformation.totalPage;
    if (page < 1) this.filters.page = 1;

    this.filters.page = page;
  }

  filterByColumn(column: keyof Alumno) {
    if (this.filters.orderBy === column) {
      this.filters.order = this.filters.order === 'asc' ? 'desc' : 'asc';
    } else {
      this.filters.order = 'asc';
    }
    this.filters.orderBy = column;
  }

  filterBySearch({
    nExpediente,
    nombre,
    apellidos,
  }: {
    nExpediente: string;
    nombre: string;
    apellidos: string;
  }) {
    if (nExpediente.length > 0) {
      this.filters.numeroExpediente = nExpediente;
      console.log('Numero expediente', nExpediente);
    }
    if (nombre) this.filters.nombre = nombre;
    if (apellidos) this.filters.apellidos = apellidos;
  }

  clearFilters() {
    this.filters = {
      nombre: '',
      apellidos: '',
      universidad: '',
      estadoMatricula: '',
      tipoConvenio: '',
      numeroExpediente: '',
      page: 1,
      pageSize: 10,
      order: 'asc',
      orderBy: 'numeroExpediente',
    };
  }
}
