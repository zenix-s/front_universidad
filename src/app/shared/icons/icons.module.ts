import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupIconComponent } from './group-icon/group-icon.component';
import { ChecklistIconComponent } from './checklist-icon/checklist-icon.component';
import { ClockIconComponent } from './clock-icon/clock-icon.component';
import { LocationIconComponent } from './location-icon/location-icon.component';
import { PaperIconComponent } from './paper-icon/paper-icon.component';
import { UeIconComponent } from './ue-icon/ue-icon.component';
import { MenuIconComponent } from './menu-icon/menu-icon.component';



@NgModule({
  declarations: [
    GroupIconComponent,
    ChecklistIconComponent,
    ClockIconComponent,
    LocationIconComponent,
    PaperIconComponent,
    UeIconComponent,
    MenuIconComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    GroupIconComponent,
    ChecklistIconComponent,
    ClockIconComponent,
    LocationIconComponent,
    PaperIconComponent,
    UeIconComponent,
    MenuIconComponent
  ]
})
export class IconsModule { }
