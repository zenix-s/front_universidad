import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  standalone: true,
  imports: [ButtonComponent],
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

  @Input()
  currentPage!: number;

  @Input()
  totalPages!: number;

  @Input()
  totalItems!: number;

  @Input()
  itemsPerPage!: number;


  @Output()
  nextPage = new EventEmitter<void>();

  @Output()
  previousPage = new EventEmitter<void>();

  @Output()
  goToPage = new EventEmitter<number>();



}
