import { Component, signal } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar';
@Component({
  selector: 'app-root',
  imports: [SidebarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-website');
}
