import { Injectable } from "@angular/core";
import { Matricula } from "@app/core/entities/Matricula.entity";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MatriculaFormService {
  private _isOpen = new BehaviorSubject<boolean>(false);

  private _matricula = new BehaviorSubject<Matricula | null>(null);

  isOpen$ = this._isOpen.asObservable();
  matricula$ = this._matricula.asObservable();

  isOpened() {
    return this._isOpen.getValue();
  }

  open() {
    this._isOpen.next(true);
    console.log("open");
  }

  close() {
    this._isOpen.next(false);
  }

  set matricula(matricula: Matricula | null) {
    this._matricula.next(matricula);
  }
}
