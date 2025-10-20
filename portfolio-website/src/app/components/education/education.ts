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
      title: 'University A',
      subtitle: '(Student)',
      logoUrl: 'assets/college-logo.png', // Replace with your college logo path
      headerColor: '#30475E', // Dark blue/gray for header
      details: [
        'Point A',
        'Point B',
        'Point C',
        'Point D'
      ]
    },
    {
      type: 'work',
      title: 'University B',
      subtitle: 'Student',
      logoUrl: 'assets/propel-logo.png', // Replace with Propel logo path
      headerColor: '#172740', // Darker blue/black
      details: [
        'Explored ROS.',
        'Text b.',
        'Understood complex tax calculation requirements and rewrote an existing module and improved processing performance by 50%.'
      ]
    }
  ];
}