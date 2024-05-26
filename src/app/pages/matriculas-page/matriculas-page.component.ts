import { CommonModule } from '@angular/common';
import {
  Component,
  OnDestroy,
  OnInit,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { Matricula } from '@app/core/entities/Matricula.entity';
import { MatriculasService } from '@app/core/services/matriculas-service/matriculas.service';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { TableComponent } from '@app/shared/components/table/table.component';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { MatriculaFormService } from '../../shared/components/matricula-form/matricula-form.service';
import { MatriculaFormComponent } from '../../shared/components/matricula-form/matricula-form.component';

@Component({
  selector: 'app-matriculas-page',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent,
    ButtonComponent,
    MatriculaFormComponent,
  ],
  templateUrl: './matriculas-page.component.html',
  styleUrl: './matriculas-page.component.css',
})
export class MatriculasPageComponent implements OnInit, OnDestroy {
  private matriculasService = inject(MatriculasService);
  matriculas: WritableSignal<Matricula[]> = signal<Matricula[]>([]);
  matriculaFormService = inject(MatriculaFormService);

  private ngUnsubscribe = new Subject<void>();

  ngOnInit(): void {
    this.matriculasService.getMatriculas();

    this.matriculasService.matriculas$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((matriculas) => {
        this.matriculas.set(matriculas);
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
