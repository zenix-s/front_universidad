import { Injectable, inject } from '@angular/core';
import { Titulacion } from '@app/core/entities/Titulacion.entity';
import { ToasterService } from '@app/core/toaster/service/toaster.service';
import { BehaviorSubject } from 'rxjs';
import { titulaciones } from '@app/core/data/data';

@Injectable({
  providedIn: 'root'
})
export class TitulacionesService {
  private toasterService = inject(ToasterService);
  private _titulaciones = new BehaviorSubject<Titulacion[]>([]);

  titulaciones$ = this._titulaciones.asObservable();


  addTitulacion(titulacion: Titulacion) {
    titulaciones.push(titulacion);
    this._titulaciones.next(titulaciones);
    this.toasterService.success('Estudiante añadido correctamente');
  }


  updateTitulacion(titulacion: Titulacion) {
    const index = titulaciones.findIndex(
      (e) => e.id === titulacion.id
    );
    titulaciones[index] = titulacion;
    this._titulaciones.next(titulaciones);
    this.toasterService.success('Estudiante actualizado correctamente');
  }

  getTitulaciones() {
    this._titulaciones.next(titulaciones);
  }

  getTitulacionesSnapshot() {
    return this._titulaciones.getValue();
  }

  constructor() {}
}
