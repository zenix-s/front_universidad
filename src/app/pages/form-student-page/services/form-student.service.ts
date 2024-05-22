import { Injectable } from '@angular/core';
import { Alumno } from "@app/core/entities/Alumno.entity"

@Injectable({
  providedIn: 'root'
})
export class FormStudentService {

  student:Alumno | null = null;



}
