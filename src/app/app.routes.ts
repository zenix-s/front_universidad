import { Routes } from '@angular/router';
import { SearchStudentPageComponent } from './pages/search-student-page/search-student-page.component';
import { FormStudentPageComponent } from './pages/form-student-page/form-student-page.component';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { TitulacionesPageComponent } from './pages/titulaciones-page/titulaciones-page.component';

export const routes: Routes = [
  {
    path: 'student/search',
    component: SearchStudentPageComponent,
  },
  {
    path: 'student/form',
    component: FormStudentPageComponent,
  },
  {
    path: 'student/form/:id',
    component: FormStudentPageComponent,
  },
  {
    path: 'titulaciones',
    component: TitulacionesPageComponent,
  },
  {
    path: 'tests',
    component: TestPageComponent,
  },
  {
    path: '**',
    redirectTo: 'student/search',
  },
];
