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
      title: 'COMponent-Aware Pruning for Accelerated Control Tasks in Latent Space Models',
      authors: 'G. Sundaram, J. Ulmen, A. Haider, D. Görges',
      journal: 'The 2026 IEEE/SICE International Symposium on System Integration (SII 2026)',
      year: 2025,
      doi: '10.48550/arXiv.2508.08144',
      link: 'https://doi.org/10.48550/arXiv.2508.08144' // Link to the paper's source/PDF
    },
    {
      title: 'Application-Specific Component-Aware Structured Pruning of Deep Neural Networks via Soft Coefficient Optimization',
      authors: 'G. Sundaram, J. Ulmen, A. Haider, D. Görges',
      journal: '24th European Control Conference (ECC26)',
      year: 2025,
      doi: '10.48550/arXiv.2507.14882',
      link:  'https://doi.org/10.48550/arXiv.2507.14882',
    },
    {
      title: 'Denoising and Segmentation of SONAR Images for Rescue Operations',
      authors: 'H. E. Keen, A. Haider, K. Berns',
      journal: 'ISR Europe 2023; 56th International Symposium on Robotics',
      year: 2023,
      doi: 'ISBN:978-3-8007-6140-1',
      link:  'https://ieeexplore.ieee.org/abstract/document/10363104',
    }
  ];

}
