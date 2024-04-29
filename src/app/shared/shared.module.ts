import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionComponent } from './components/section/section.component';
import { IconsModule } from './icons/icons.module';




@NgModule({
  declarations: [
    InputComponent,
    SidebarComponent,
    HeaderComponent,
    SectionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IconsModule,
    NgOptimizedImage
  ],
  exports: [
    InputComponent,
    SidebarComponent,
    HeaderComponent,
    SectionComponent
  ]
})
export class SharedModule { }
