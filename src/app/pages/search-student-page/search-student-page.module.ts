import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchStudentPageComponent } from './search-student-page/search-student-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { IconsModule } from '@app/shared/icons/icons.module';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { PaginationTableComponent } from './components/pagination-table/pagination-table.component';

@NgModule({
  declarations: [

    PaginationTableComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, SharedModule, IconsModule, SearchStudentPageComponent],
  exports: [PaginationTableComponent],
})
export class SearchStudentPageModule {}
