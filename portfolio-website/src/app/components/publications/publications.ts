import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-publications',
imports: [
    CommonModule, 
    MatCardModule, 
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './publications.html',
  styleUrl: './publications.css'
})
export class Publications {
  // Define your publication entries
  publications = [
    {
      title: 'Title of Research Paper One: Analyzing Data Structures in C++',
      authors: 'A. Haider, J. Smith',
      journal: 'International Journal of Algorithms',
      year: 2023,
      doi: '10.xxxx/xxxx-xxxx-xxxx',
      link: 'https://doi.org/your/doi/link' // Link to the paper's source/PDF
    },
    {
      title: 'Optimizing Python Scripts for Web Scraping using Async Methods',
      authors: 'A. Haider',
      journal: 'Conference on Web Development',
      year: 2024,
      doi: null,
      link: 'https://www.example.com/paper-two' 
    }
    // Add more publications here
  ];

}
