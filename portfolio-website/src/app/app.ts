import { Component, signal } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar';
import { Intro } from './components/intro/intro';
@Component({
  selector: 'app-root',
  imports: [Intro, SidebarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-website');
}
