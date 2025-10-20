import { Component, signal } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar';
import { Intro } from './components/intro/intro';
import { WorkExperience } from './components/work-experience/work-experience'
import { Projects } from './components/projects/projects'
import { Education } from './components/education/education'
import { Publications } from './components/publications/publications'

@Component({
  selector: 'app-root',
  imports: [Intro, SidebarComponent, WorkExperience,Projects, Education, Publications],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-website');
}
