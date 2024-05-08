import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionComponent } from './components/section/section.component';
import { IconsModule } from './icons/icons.module';
import { SidebarNavItemComponent } from './components/sidebar/sidebar-nav-item/sidebar-nav-item.component';
import { SubmenuComponent } from './components/sidebar/submenu/submenu.component';
import { SelectComponent } from './components/select/select.component';
import { ButtonComponent } from './components/button/button.component';




@NgModule({
  declarations: [
    InputComponent,
    SidebarComponent,
    HeaderComponent,
    SectionComponent,
    SidebarNavItemComponent,
    SubmenuComponent,
    SelectComponent,
    ButtonComponent
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
