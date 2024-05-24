import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SectionComponent } from '@app/shared/components/section/section.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TitulacionesService } from '@app/core/services/titulaciones-service/titulaciones.service';
import { Titulacion } from '@app/core/entities/Titulacion.entity';
import { TableComponent } from '@app/shared/components/table/table.component';
import { Matricula } from '@app/core/entities/Matricula.entity';
import { MatriculasService } from '@app/core/services/matriculas-service/matriculas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-titulacion-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SectionComponent, TableComponent],
  templateUrl: './titulacion-page.component.html',
  styleUrl: './titulacion-page.component.css',
})
export class TitulacionPageComponent implements OnInit, OnDestroy {
  ActivatedRoute = inject(ActivatedRoute);
  TitulacionesService = inject(TitulacionesService);
  router = inject(Router);
  matriculasService = inject(MatriculasService);

  subscripciones: Subscription[] = [];

  titulacion: Titulacion | null = null;
  matriculas = signal<Matricula[]>([]);
  ngOnInit(): void {
    this.subscripciones.push(
      this.ActivatedRoute.paramMap.subscribe((params) => {
        if (!params.has('codigo')) {
          this.router.navigate(['/']);
          return;
        }
        let id = params.get('codigo');
        if (!id) return;
        const titulacion = this.TitulacionesService.getTitulacion(id);
        if (!titulacion) {
          this.router.navigate(['/']);
          return;
        }
        this.titulacion = titulacion;
        this.matriculas.set(this.matriculasService.getMatriculasByTitulacion(this.titulacion.id));
      })
    );
  }

  ngOnDestroy(): void {
    this.subscripciones.forEach((sub) => sub.unsubscribe());
  }
}
