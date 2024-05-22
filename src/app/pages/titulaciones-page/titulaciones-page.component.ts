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
import { TableComponent } from '@app/shared/components/table/table.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-titulaciones-page',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './titulaciones-page.component.html',
  styleUrl: './titulaciones-page.component.css',
})
export class TitulacionesPageComponent implements OnInit, OnDestroy {
  titulacionesService = inject(TitulacionesService);
  titulaciones: WritableSignal<Titulacion[]> = signal<Titulacion[]>([]);

  subcriptions: Subscription[] = [];

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
