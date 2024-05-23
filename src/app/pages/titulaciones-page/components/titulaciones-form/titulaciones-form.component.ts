import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { DateInputComponent } from '@app/shared/components/date-input/date-input.component';
import { InputComponent } from '@app/shared/components/input/input.component';
import { ModalComponent } from '@app/shared/components/modal/modal.component';
import { TitulacionesFormService } from './titulaciones-form.service';
import { TitulacionesService } from '@app/core/services/titulaciones-service/titulaciones.service';
import { Titulacion } from '@app/core/entities/Titulacion.entity';
import { Subscription } from 'rxjs';
import { ToasterService } from '@app/core/toaster/service/toaster.service';

@Component({
  selector: 'app-titulaciones-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    InputComponent,
    ButtonComponent,
    ModalComponent,
    DateInputComponent,
  ],
  templateUrl: './titulaciones-form.component.html',
  styleUrl: './titulaciones-form.component.css',
})
export class TitulacionesFormComponent implements OnInit, OnDestroy{
  fb = inject(FormBuilder)
  titulacionesFormService = inject(TitulacionesFormService)
  TitulacionesService = inject(TitulacionesService)
  toasterService = inject(ToasterService)

  isOpen: WritableSignal<boolean> = signal<boolean>(false)
  titulacion: WritableSignal<Titulacion | null> = signal<Titulacion | null>(null)

  subscripciones: Subscription[] = []

  titulacionForm = this.fb.group({
    id: [null as string | null],
    nombre: ['', [Validators.required, Validators.maxLength(255), Validators.minLength(3)]],
  })

  onSubmit() {
    if (this.titulacionForm.invalid) {
      this.toasterService.error('Formulario inválido')
      return;
    }

    this.TitulacionesService.postTitulacion({
      id: '0',
      nombre: this.titulacionForm.value.nombre as string,
    })
    this.titulacionesFormService.close()
  }

  ngOnInit(): void {
    this.subscripciones.push(
      this.titulacionesFormService.isOpen$.subscribe((isOpen) => {
        this.isOpen.set(isOpen)
      }),
      this.titulacionesFormService.titulacion$.subscribe((titulacion) => {
        this.titulacion.set(titulacion)
        if (titulacion) {
          this.titulacionForm.setValue({
            id: titulacion.id,
            nombre: titulacion.nombre,
          })
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscripciones.forEach((s) => s.unsubscribe())
  }
}
