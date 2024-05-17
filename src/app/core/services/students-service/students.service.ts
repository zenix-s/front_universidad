import { Injectable } from '@angular/core';
import { Alumno } from '@types';
import { BehaviorSubject } from 'rxjs';
import { estudiantes } from '@app/core/data/data';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private _students = new BehaviorSubject<Alumno[]>([]);

  students$ = this._students.asObservable();

  get totalStudents() {
    return estudiantes.length;
  }

  addStudent(student: Alumno) {
    estudiantes.push(student);
    this._students.next(estudiantes);
  }

  getstudents() {
    this._students.next(estudiantes);
  }

  getStudentsSnapshot() {
    return this._students.getValue();
  }

  constructor() {}
}
