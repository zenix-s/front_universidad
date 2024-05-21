import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
@Component({
  selector: 'app-test-table',
  standalone: true,
  imports: [],
  templateUrl: './test-table.component.html',
  styleUrl: './test-table.component.css',
})
export class TestTableComponent<T extends object> implements OnChanges {
  @Input() data: T[] = [];
  @Input() columns: (keyof T)[] = [];

  columnOrder: 'asc' | 'desc' = 'asc';
  orderBy: keyof T = this.columns[0];

  @Output() rowClicked = new EventEmitter<{
    orderBy: keyof T;
    columnOrder: 'asc' | 'desc';
  }>();

  columnClicked(column: keyof T): void {
    this.columnOrder = this.columnOrder === 'asc' ? 'desc' : 'asc';
    this.orderBy = column;
    this.rowClicked.emit({
      orderBy: this.orderBy,
      columnOrder: this.columnOrder,
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['data'] &&
      this.data.length > 0
    ) {
      this.columns = Object.keys(this.data[0]) as (keyof T)[];
    }
  }
}
