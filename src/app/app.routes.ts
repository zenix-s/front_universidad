import { Routes } from '@angular/router';
import { SearchStudentPageComponent } from './pages/search-student-page/search-student-page.component';
import { FormStudentPageComponent } from './pages/form-student-page/form-student-page.component';

export const routes: Routes = [
  {
    path: 'student/search',
    component: SearchStudentPageComponent
  },
  {
    path: 'student/form',
    component: FormStudentPageComponent
  },
  {
    path: 'student/form/:id',
    component: FormStudentPageComponent
  },
  {
    path: '**',
    redirectTo: 'student/search'
  }

];
