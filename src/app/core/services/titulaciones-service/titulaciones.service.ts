import { Injectable, inject } from '@angular/core';
import { Titulacion } from '@app/core/entities/Titulacion.entity';
import { ToasterService } from '@app/core/toaster/service/toaster.service';
import { BehaviorSubject } from 'rxjs';
import { titulaciones } from '@app/core/data/data';

@Injectable({
  providedIn: 'root',
})
export class TitulacionesService {
  private toasterService = inject(ToasterService);
  private _titulaciones = new BehaviorSubject<Titulacion[]>([]);

  titulaciones$ = this._titulaciones.asObservable();

  private generateid(): string {
    // id string numerico aleatorio de 5 digitos si 99 rellenar con 0 a la izquierda
    let id = Math.floor(Math.random() * 100000).toString();
    while (id.length < 5) {
      id = '0' + id;
    }
    if (titulaciones.find((e) => e.id === id)) {
      return this.generateid();
    }
    return id;
  }

  private addTitulacion(titulacion: Titulacion) {
    titulaciones.push(titulacion);
    this._titulaciones.next(titulaciones);
    this.toasterService.success('Estudiante añadido correctamente');
  }

  postTitulacion(titulacion: Titulacion) {
    // Peticion POST a la API
    // subscribe((response) => {
    titulacion.id = this.generateid();
    this.addTitulacion(titulacion);
    // });
  }

  updateTitulacion(titulacion: Titulacion) {
    const index = titulaciones.findIndex((e) => e.id === titulacion.id);
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

  getIdTitulaciones() {
    return titulaciones.map((e) => {
      return {
        label: e.id + ' - ' + e.nombre,
        value: e.id,
      };
    });
  }

  getTitulacion(id: string) {
    return titulaciones.find((e) => e.id === id);
  }

  constructor() {}
}
