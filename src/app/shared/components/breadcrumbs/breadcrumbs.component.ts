import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.css',
})
export class BreadcrumbsComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router)

  items: {
    label: string;
    url: string;
  }[] = [];

  // createBreadcrumbs(root: ActivatedRoute): { label: string; url: string; }[] {

  //   const items = [];
  //   let currentRoute = root;
  //   while (currentRoute.children[0] !== undefined) {
  //     console.log(currentRoute.children[0].snapshot.url);
  //   }

  //   return []

  // }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe((url) => {
      console.log(url);
    })
  }
}
