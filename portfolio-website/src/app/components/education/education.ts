import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-education',
  imports: [
    CommonModule, 
    MatCardModule, 
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class Education {
  // Define your educational entries
  education = [
    {
      institution: 'University Name 1',
      degree: 'Master of Science in Computer Science',
      period: 'Sept 2020 - Jun 2022',
      location: 'City, Country',
      details: [
        'Specialized in Algorithm Design and Analysis.',
        'Thesis project focused on optimizing resource allocation using Python.',
        'Relevant Courses: Advanced C++, Distributed Systems.'
      ]
    },
    {
      institution: 'University Name 2',
      degree: 'Bachelor of Technology in Engineering',
      period: 'Sept 2016 - May 2020',
      location: 'City, Country',
      details: [
        'Graduated with Honors.',
        'Completed a major project using C++ for real-time data visualization.',
        'Involved in the campus coding club and led a team for a hackathon.'
      ]
    },
    // Add any other relevant courses, certifications, or self-study
  ];

}
