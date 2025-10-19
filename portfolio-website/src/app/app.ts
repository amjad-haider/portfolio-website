import { Component, signal } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar';
import { Intro } from './components/intro/intro';
import { WorkExperience } from './components/work-experience/work-experience'
@Component({
  selector: 'app-root',
  imports: [Intro, SidebarComponent, WorkExperience],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-website');
}
