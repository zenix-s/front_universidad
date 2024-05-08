import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchStudentPageComponent } from './pages/search-student-page/search-student-page/search-student-page.component';

const routes: Routes = [

  {
    path: 'student/search',
    component: SearchStudentPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
