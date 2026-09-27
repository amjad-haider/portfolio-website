import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-certifications',
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css'
})
export class Certifications {
  certifications = [
    {
      title: 'Deutsch-Test für den Beruf B2 (DTB)',
      issuer: 'telc gGmbH',
      date: 'Aug 2026',
      logoUrl: '/assets/telc-logo.png',
      description: 'German Language Course for Professionals B2 at Volkshochschule Kaiserslautern',
      verifyUrl: 'https://results.telc.net/vb?credential=telc-1By5cj4ern7K'
    },
    {
      title: 'Microsoft Certified: Azure AI Apps and Agents Developer Associate (AI-103)',
      issuer: 'Microsoft',
      date: 'Aug 2026 · Credential ID 6952D3D552C19422',
      logoUrl: '/assets/microsoft-foundry.svg',
      description: 'Designing and building AI applications and agents on Azure AI services.',
      verifyUrl: 'https://learn.microsoft.com/en-in/users/amjadhaider-6404/credentials/6952d3d552c19422'
    }
  ];
}
