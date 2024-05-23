import { Component } from '@angular/core';
import { TestTableComponent } from './test-table/test-table.component';
interface TestData {
  name: string;
  age: number;
  email: string;
}
@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [TestTableComponent],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.css'
})
export class TestPageComponent {
  data:TestData[] = [
    {
      name: 'John Doe',
      age: 25,
      email: 'jdoe@mail.com'
    },
    {
      name: 'Jane Doe',
      age: 23,
      email: 'jadoe@mail.com'
    },
    {
      name: 'John Smith',
      age: 30,
      email: 'josmi@mail.com'
    }
  ]

  data2:TestData[] = []


  something({
    orderBy,
    columnOrder
  }: {
    orderBy: keyof TestData;
    columnOrder: 'asc' | 'desc';
  }): void {
  }
}
