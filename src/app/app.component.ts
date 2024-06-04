import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToasterProviderComponent } from './core/toaster/toaster-provider/toaster-provider.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MatriculaFormComponent } from './shared/components/matricula-form/matricula-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ToasterProviderComponent,
    SidebarComponent,
    HeaderComponent,
    MatriculaFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [],
})
export class AppComponent {
  title = 're_front_universidad';
}
