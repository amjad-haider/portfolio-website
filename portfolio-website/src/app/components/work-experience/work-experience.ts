import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-work-experience',
  imports: [CommonModule,MatCardModule,MatIconModule],
  templateUrl: './work-experience.html',
  styleUrl: './work-experience.css'
})

export class WorkExperience {
  // 1. Define the data structure for your experience
  experience = [
    {
      company: 'Tech Solutions Inc.',
      title: 'Junior Python Developer',
      logoUrl: 'assets/VWGroup.png', // Replace with a real path/URL
      duration: 'Jan 2023 - Dec 2023',
      techStack: ['Python', 'Django', 'PostgreSQL', 'Git'],
      tasks: [
        '**Reduced data processing time by 40%** by optimizing database queries in Django.',
        'Developed and deployed 3 new RESTful API endpoints for external partners.',
        'Wrote comprehensive unit tests, improving code coverage from 60% to 90%.'
      ]
    },
    // Add more entries here for each job/internship
  ];
}
