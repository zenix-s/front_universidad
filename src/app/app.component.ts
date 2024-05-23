import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToasterProviderComponent } from './core/toaster/toaster-provider/toaster-provider.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MatriculaFormComponent } from './pages/matriculas-page/components/matricula-form/matricula-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToasterProviderComponent, SidebarComponent, HeaderComponent, MatriculaFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 're_front_universidad';
}
