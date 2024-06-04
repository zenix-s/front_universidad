import { Component, Input, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SectionComponent } from '@app/shared/components/section/section.component';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { TitulacionesService } from '@app/core/services/titulaciones-service/titulaciones.service';
import { Titulacion } from '@app/core/entities/Titulacion.entity';
import { TableComponent } from '@app/shared/components/table/table.component';
import { Matricula } from '@app/core/entities/Matricula.entity';
import { MatriculasService } from '@app/core/services/matriculas-service/matriculas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-titulacion-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SectionComponent,
    TableComponent,
  ],
  templateUrl: './titulacion-page.component.html',
  styleUrl: './titulacion-page.component.css',
  providers: [
  ],
})
export class TitulacionPageComponent implements OnInit, OnDestroy {
  TitulacionesService = inject(TitulacionesService);
  router = inject(Router);
  matriculasService = inject(MatriculasService);

  private ngUnsubscribe = new Subject<void>();

  titulacion: Titulacion | null = null;
  matriculas = signal<Matricula[]>([]);

  @Input() codigo?: string;
  ngOnInit(): void {
    if (!this.codigo) {
      this.router.navigate(['/']);
      return
    }
    const titulacion = this.TitulacionesService.getTitulacion(this.codigo);
    if (!titulacion) {
      this.router.navigate(['/']);
      return
    }
    this.titulacion = titulacion;
    this.matriculas.set(
      this.matriculasService.getMatriculasByTitulacion(this.titulacion.id)
    );
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
