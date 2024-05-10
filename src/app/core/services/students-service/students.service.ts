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

  getstudents() {
    // console.log(students);
    this._students.next(estudiantes);
  }

  constructor() {}
}
