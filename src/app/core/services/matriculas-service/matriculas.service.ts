import { Injectable, inject } from "@angular/core";
import { Matricula } from "@app/core/entities/Matricula.entity";
import { ToasterService } from "@app/core/toaster/service/toaster.service";
import { BehaviorSubject } from "rxjs";
import { matriculas } from "@app/core/data/data";

@Injectable({
  providedIn: "root",
})
export class MatriculasService {
  private toasterService = inject(ToasterService);
  private _matriculas = new BehaviorSubject<Matricula[]>([]);

  matriculas$ = this._matriculas.asObservable();

  addMatricula(matricula: Matricula) {
    matriculas.push(matricula);
    this._matriculas.next(matriculas);
    this.toasterService.success("Matrícula añadida correctamente");
  }

  updateMatricula(matricula: Matricula) {
    const index = matriculas.findIndex(
      (e) => e.numeroMatricula === matricula.numeroMatricula,
    );
    matriculas[index] = matricula;
    this._matriculas.next(matriculas);
    this.toasterService.success("Matrícula actualizada correctamente");
  }

  getMatriculas() {
    this._matriculas.next(matriculas);
  }

  getMatriculasSnapshot() {
    return this._matriculas.getValue();
  }

  getMatriculasByExpediente(numeroExpediente: string) {
    return matriculas.filter((m) => m.idExpediente === numeroExpediente);
  }

  getMatriculasByTitulacion(codigoTitulacion: string) {
    return matriculas.filter((m) => m.idTitulacion === codigoTitulacion);
  }
}
