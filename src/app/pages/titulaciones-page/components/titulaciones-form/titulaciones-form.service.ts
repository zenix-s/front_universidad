import { Injectable } from '@angular/core';
import { Titulacion } from '@app/core/entities/Titulacion.entity';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitulacionesFormService {

  private _isOpen = new BehaviorSubject<boolean>(false);
  private _titulacion = new BehaviorSubject<Titulacion | null>(null);

  isOpen$ = this._isOpen.asObservable();
  titulacion$ = this._titulacion.asObservable();

  isOpened() {
    return this._isOpen.getValue();
  }

  open() {
    this._isOpen.next(true);
  }

  close() {
    this._isOpen.next(false);
  }

  set titulacion(titulacion: Titulacion | null) {
    this._titulacion.next(titulacion);
  }

}
