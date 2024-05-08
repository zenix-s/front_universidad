import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupIconComponent } from './group-icon/group-icon.component';
import { ChecklistIconComponent } from './checklist-icon/checklist-icon.component';
import { ClockIconComponent } from './clock-icon/clock-icon.component';
import { LocationIconComponent } from './location-icon/location-icon.component';
import { PaperIconComponent } from './paper-icon/paper-icon.component';
import { UeIconComponent } from './ue-icon/ue-icon.component';
import { MenuIconComponent } from './menu-icon/menu-icon.component';
import { HomeIconComponent } from './home-icon/home-icon.component';
import { PdfIconComponent } from './pdf-icon/pdf-icon.component';
import { ExpandMoreIconComponent } from './expand-more-icon/expand-more-icon.component';
import { ExpandLessIconComponent } from './expand-less-icon/expand-less-icon.component';
import { LogoutIconComponent } from './logout-icon/logout-icon.component';
import { SettingsIconComponent } from './settings-icon/settings-icon.component';



@NgModule({
  declarations: [
    GroupIconComponent,
    ChecklistIconComponent,
    ClockIconComponent,
    LocationIconComponent,
    PaperIconComponent,
    UeIconComponent,
    MenuIconComponent,
    HomeIconComponent,
    PdfIconComponent,
    ExpandMoreIconComponent,
    ExpandLessIconComponent,
    LogoutIconComponent,
    SettingsIconComponent
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
    MenuIconComponent,
    HomeIconComponent,
    PdfIconComponent,
    ExpandMoreIconComponent,
    ExpandLessIconComponent,
    LogoutIconComponent,
    SettingsIconComponent
  ]
})
export class IconsModule { }
