import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent<T extends object> implements OnChanges {
  @Input() data: T[] = [];
  @Input() columns: (keyof T)[] = [];

  orderType: 'asc' | 'desc' = 'asc';
  columnOrder: keyof T = this.columns[0];

  @Output() rowClicked = new EventEmitter<{
    column: keyof T;
    order: 'asc' | 'desc';
  }>();

  columnClicked(column: keyof T): void {
    if (this.columnOrder === column)
      this.orderType = this.orderType === 'asc' ? 'desc' : 'asc';
    else
      this.orderType = 'asc';
    this.columnOrder = column;
    this.rowClicked.emit({
      column: this.columnOrder,
      order: this.orderType,
    });
  }

  isDate(value: any): boolean {
    return value instanceof Date;
  }
  anyToDate(value: any): Date {
    return new Date(value);
  }

  transformTitle(column: keyof T): string {
    return column.toString().replace(/([A-Z])/g, ' $1').trim();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data.length > 0 && this.columns.length === 0) {
      this.columns = Object.keys(this.data[0]) as (keyof T)[];
      this.columnOrder = this.columns[0];
    }
  }
}
