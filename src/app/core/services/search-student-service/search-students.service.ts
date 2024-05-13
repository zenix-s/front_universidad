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
    pageSize: 100,
    order: 'asc',
    orderBy: 'apellidos',
  };

  nextPage() {
    this.filters.page++;
  }

  previousPage() {
    this.filters.page--;
  }

  filterStudents(students: Alumno[]): Alumno[] {
    const startIndex = (this.filters.page - 1) * this.filters.pageSize;

    const endIndex = Math.min(
      startIndex + this.filters.pageSize,
      students.length
    );

    const nombre: string = '';

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
