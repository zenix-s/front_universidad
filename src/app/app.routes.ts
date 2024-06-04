import { Routes } from "@angular/router";
import { SearchStudentPageComponent } from "./pages/search-student-page/search-student-page.component";
import { FormStudentPageComponent } from "./pages/form-student-page/form-student-page.component";
import { TitulacionesPageComponent } from "./pages/titulaciones-page/titulaciones-page.component";
import { MatriculasPageComponent } from "./pages/matriculas-page/matriculas-page.component";
import { TitulacionPageComponent } from "./pages/titulacion-page/titulacion-page.component";

export const routes: Routes = [
  {
    path: "expediente/busqueda",
    component: SearchStudentPageComponent,
  },
  {
    path: "expediente/nuevo",
    component: FormStudentPageComponent,
  },
  {
    path: "expediente/:idExpediente",
    component: FormStudentPageComponent
  },
  {
    path: "student/form/:id",
    component: FormStudentPageComponent,
  },
  {
    path: "titulaciones",
    component: TitulacionesPageComponent,
  },
  {
    path: "titulacion/:codigo",
    component: TitulacionPageComponent
  },
  {
    path: "matriculas",
    component: MatriculasPageComponent,
  },
  {
    path: "**",
    redirectTo: "expediente/busqueda",
  },
];
