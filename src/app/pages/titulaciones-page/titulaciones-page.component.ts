import { CommonModule } from '@angular/common';
import {
  Component,
  OnDestroy,
  OnInit,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { Titulacion } from '@app/core/entities/Titulacion.entity';
import { TitulacionesService } from '@app/core/services/titulaciones-service/titulaciones.service';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { TableComponent } from '@app/shared/components/table/table.component';
import { Subscription } from 'rxjs';
import { TitulacionesFormService } from './components/titulaciones-form/titulaciones-form.service';
import { TitulacionesFormComponent } from './components/titulaciones-form/titulaciones-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-titulaciones-page',
  standalone: true,
  imports: [CommonModule, TableComponent, ButtonComponent, TitulacionesFormComponent],
  templateUrl: './titulaciones-page.component.html',
  styleUrl: './titulaciones-page.component.css',
})
export class TitulacionesPageComponent implements OnInit, OnDestroy {
  titulacionesService = inject(TitulacionesService);
  titulaciones: WritableSignal<Titulacion[]> = signal<Titulacion[]>([]);
  titulacionesFormService = inject(TitulacionesFormService);
  router = inject(Router)

  subcriptions: Subscription[] = [];

  openTitulacion(titulacion:Titulacion): void {
    this.router.navigate(['titulacion', titulacion.id]);
  }

  ngOnInit(): void {
    this.titulacionesService.getTitulaciones();
    this.subcriptions.push(
      this.titulacionesService.titulaciones$.subscribe((titulaciones) => {
        this.titulaciones.set(titulaciones);
      })
    );
  }

  ngOnDestroy(): void {
    this.subcriptions.forEach((sub) => sub.unsubscribe());
  }
}
