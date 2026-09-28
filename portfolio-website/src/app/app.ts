import { Component, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SidebarComponent } from './components/sidebar/sidebar';
import { Intro } from './components/intro/intro';
import { WorkExperience } from './components/work-experience/work-experience'
import { Projects } from './components/projects/projects'
import { Education } from './components/education/education'
import { Publications } from './components/publications/publications'
import { Certifications } from './components/certifications/certifications'

@Component({
  selector: 'app-root',
  imports: [Intro, SidebarComponent, WorkExperience, Projects, Education, Certifications, Publications],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-website');

  constructor() {
    // index.html is not translated, so set the per-language title and description here
    inject(Title).setTitle($localize`:@@meta.title:Amjad Haider – Software Engineer | C++, Robotics & Simulation`);
    inject(Meta).updateTag({
      name: 'description',
      content: $localize`:@@meta.description:Amjad Haider – Software Engineer with 4+ years in C++, robotics, simulation, automation and embedded IoT. Experience at Volkswagen, iDTRONIC and RPTU Kaiserslautern-Landau. Published researcher in efficient AI for control.`
    });
  }
}
