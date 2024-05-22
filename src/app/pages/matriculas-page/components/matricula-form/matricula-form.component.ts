import {
  Component,
  OnDestroy,
  OnInit,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatriculaFormService } from './matricula-form.service';
import { Matricula } from '@app/core/entities/Matricula.entity';
import { EstadoMatriculacion } from '@app/core/entities/interfaces.entity';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { InputComponent } from '@app/shared/components/input/input.component';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { ModalComponent } from '@app/shared/components/modal/modal.component';
import { DateInputComponent } from '@app/shared/components/date-input/date-input.component';
import { MatriculasService } from '@app/core/services/matriculas-service/matriculas.service';

@Component({
  selector: 'app-matricula-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    InputComponent,
    ButtonComponent,
    ModalComponent,
    DateInputComponent,
  ],
  templateUrl: './matricula-form.component.html',
  styleUrl: './matricula-form.component.css',
})
export class MatriculaFormComponent implements OnInit, OnDestroy {
  fb = inject(FormBuilder);
  matriculaFormService = inject(MatriculaFormService);
  matriculaService = inject(MatriculasService);

  isOpen: WritableSignal<boolean> = signal<boolean>(false);
  matricula: WritableSignal<Matricula | null> = signal<Matricula | null>(null);

  subscripciones: Subscription[] = [];

  matriculaForm: FormGroup = this.fb.group({
    numeroMatricula: [null],
    idExpediente: ['', Validators.required],
    idTitulacion: [''],
    estadoMatriculacion: [null as EstadoMatriculacion | null],
    fechaMatriculacion: [null as Date | null],
  });

  onSubmit() {
    if (this.matriculaForm.invalid) {
      return;
    }

    const matricula = this.matriculaForm.value as Matricula;
    if (matricula.numeroMatricula === null) {
      this.matriculaService.addMatricula(matricula);
    } else {
      this.matriculaService.updateMatricula(matricula);
    }
    this.matriculaFormService.close();
  }

  ngOnInit(): void {
    this.subscripciones.push(
      this.matriculaFormService.isOpen$.subscribe((isOpen) => {
        this.isOpen.set(isOpen);
      }),
      this.matriculaFormService.matricula$.subscribe((matricula) => {
        if (!matricula) {
          this.matriculaForm.reset();
          return;
        }
        this.matricula.set(matricula);
        this.matriculaForm.patchValue({
          numeroMatricula: matricula?.numeroMatricula,
          idExpediente: matricula?.idExpediente,
          idTitulacion: matricula?.idTitulacion,
          estadoMatriculacion: matricula?.estadoMatriculacion,
          fechaMatriculacion: matricula?.fechaMatriculacion,
        });
      })
    );
  }

  ngOnDestroy(): void {
    this.subscripciones.forEach((s) => s.unsubscribe());
  }
}
