import { Injectable, inject } from '@angular/core';
import { Alumno } from '@app/core/entities/Alumno.entity';
import { BehaviorSubject } from 'rxjs';
import { estudiantes, estudiantesInfo } from '@app/core/data/data';
import { ToasterService } from '@app/core/toaster/service/toaster.service';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private toasterService = inject(ToasterService);
  private _students = new BehaviorSubject<Alumno[]>([]);

  students$ = this._students.asObservable();

  get totalStudents() {
    return estudiantes.length;
  }

  generarNumeroExpediente(extranjero: boolean = false) {
    const year = new Date().getFullYear().toString().slice(2);
    const numeroExpediente =
      year + (estudiantesInfo.number + 1).toString().padStart(6, '0');
    estudiantesInfo.number++;

    if (extranjero) return 'R' + numeroExpediente;
    return numeroExpediente;
  }

  addStudent(student: Alumno) {
    student.numeroExpediente = this.generarNumeroExpediente(student.tipoConvenio === 'extranjero');
    estudiantes.push(student);
    this._students.next(estudiantes);
    this.toasterService.success('Estudiante añadido correctamente');
  }

  updateStudent(student: Alumno) {
    const index = estudiantes.findIndex(
      (e) => e.numeroExpediente === student.numeroExpediente
    );
    estudiantes[index] = student;
    this._students.next(estudiantes);
    this.toasterService.success('Estudiante actualizado correctamente');
  }

  getstudents() {
    this._students.next(estudiantes);
  }

  getStudentsSnapshot() {
    return this._students.getValue();
  }

  getIdExpedientes() {
    return estudiantes.map((e) => e.numeroExpediente);
  }

  constructor() {}
}
