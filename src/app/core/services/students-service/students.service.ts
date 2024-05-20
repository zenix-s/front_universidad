import { Injectable, inject } from '@angular/core';
import { Alumno } from "@app/core/entities/Alumno.entity";
import { BehaviorSubject } from 'rxjs';
import { estudiantes } from '@app/core/data/data';
import { ToasterService } from '@app/core/toaster/service/toaster.service';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private toasterService = inject(ToasterService)
  private _students = new BehaviorSubject<Alumno[]>([]);

  students$ = this._students.asObservable();

  get totalStudents() {
    return estudiantes.length;
  }

  addStudent(student: Alumno) {
    estudiantes.push(student);
    this._students.next(estudiantes);
    this.toasterService.success('Estudiante añadido correctamente');
  }

  getstudents() {
    this._students.next(estudiantes);
  }

  getStudentsSnapshot() {
    return this._students.getValue();
  }

  constructor() {}
}
