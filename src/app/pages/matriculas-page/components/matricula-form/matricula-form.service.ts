import { Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";
import { Matricula } from "@app/core/entities/Matricula.entity";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MatriculaFormService {
  private _isOpen = new BehaviorSubject<boolean>(false);

  private _matricula = new BehaviorSubject<Matricula | null>(null);
  private router = inject(Router)

  isOpen$ = this._isOpen.asObservable();
  matricula$ = this._matricula.asObservable();

  isOpened() {
    return this._isOpen.getValue();
  }

  open() {
    this._isOpen.next(true);
  }

  openNewExpedienteMatricula(numeroExpediente: string) {
    this._matricula.next({
      estadoMatriculacion: "Prematrícula",
      idExpediente: numeroExpediente,
      fechaMatriculacion: new Date(),
      idTitulacion: '',
      numeroMatricula: '',
    });
    this.open();
  }

  close() {
    this._isOpen.next(false);
  }

  set matricula(matricula: Matricula | null) {
    this._matricula.next(matricula);
  }
}
