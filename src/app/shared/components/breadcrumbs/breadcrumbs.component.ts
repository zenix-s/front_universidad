import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.css',
  providers: [],
})
export class BreadcrumbsComponent implements OnInit {
  router = inject(Router)

  items: {
    label: string;
    url: string;
  }[] = [];

  ngOnInit(): void {
  }
}
