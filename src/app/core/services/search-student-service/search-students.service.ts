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

export type orderType = 'asc' | 'desc';

@Injectable({
  providedIn: 'root',
})
export class SearchStudentsService {
  totalPage: number = 0;
  filters: SearchFilters = {
    nombre: '',
    apellidos: '',
    universidad: '',
    estadoMatricula: '',
    tipoConvenio: '',
    numeroExpediente: '',
    page: 1,
    pageSize: 15,
    order: 'asc',
    orderBy: 'numeroExpediente',
  };

  nextPage() {
    this.filters.page++;
  }

  previousPage() {
    this.filters.page--;
  }

  setTotalPage(totalPage: number) {
    this.totalPage = totalPage;
  }

  setPageSize(pageSize: number) {
    this.filters.pageSize = pageSize;
  }

  goToPage(page: number) {
    if (page > this.totalPage) this.filters.page = this.totalPage;
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

  filterStudents(students: Alumno[]): Alumno[] {
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

    const newFilteredStudents = students
      .filter((student) => {
        return (
          student.numeroExpediente
            .toLowerCase()
            .includes(numeroExpediente.toLowerCase()) &&
          student.nombre.toLowerCase().includes(nombre.toLowerCase()) &&
          student.apellidos.toLowerCase().includes(apellidos.toLowerCase()) &&
          student.tipoConvenio
            .toLowerCase()
            .includes(tipoConvenio.toLowerCase())
        );
      })
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

    return newFilteredStudents;
  }
}
