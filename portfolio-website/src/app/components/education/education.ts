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
journeyItems = [
    {
      type: 'education',
      title: 'Rheinland-Pfälzische Technische Universität',
      subtitle: $localize`:@@edu.1.subtitle:M.Sc in Commercial Vehicle Technology`,
      logoUrl: 'assets/RPTU_Logo.svg', // Replace with your college logo path
      headerColor: '#30475E', // Dark blue/gray for header
      details: [
        $localize`:@@edu.1.details.1:<strong>Autonomous Mobile Robots</strong>: Actively engaged in research and integration of Robots including aStrider and AutoBus at the university.`,
        $localize`:@@edu.1.details.2:<strong>Robot Kinematics & Dynamics : Development of Arm Manipulator Robots(Braccio)`,
        $localize`:@@edu.1.details.3:<strong>Computer Vision & Perception : Using Google Mediapipe for Landmark detection and tracking.`,
        $localize`:@@edu.1.details.4:<strong>Control Theory</strong>: Implementation of PID, MPC and State-Space Controllers.`
      ]
    },
    {
      type: 'work',
      title: 'Cochin University of Science and Technology',
      subtitle: $localize`:@@edu.2.subtitle:B.Tech in Mechanical Engineering`,
      logoUrl: 'assets/Cusat_logo.png', // Replace with Propel logo path
      headerColor: '#172740', // Darker blue/black
      details: [
        $localize`:@@edu.2.details.1:Engineering Mehcanics and Strength of Materials`,
        $localize`:@@edu.2.details.2:Theory of Machines and Mechanisms`,
        $localize`:@@edu.2.details.3:Control Systems`,
        $localize`:@@edu.2.details.4:Fluid Mechanics and Heat Transfer`
      ]
    }
  ];
}