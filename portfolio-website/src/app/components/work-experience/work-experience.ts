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
  experience = [
    {
      company: 'Institute of Electromobility - RPTU Kaiserslautern',
      title: 'Research Assitant',
      logoUrl: 'assets/JEM_Logo.svg', 
      duration: 'Nov 2024 - Sep 2025',
      techStack: ['Python', 'ROS2', 'Moveit2', 'PX4','Gazebo11'],
      tasks: [
        'Designing and implementing algorithms for motion planning, control, and navigation for robotic manipulators and mobile platforms using Arduino and Micro-ROS',
        'Developing and validating navigation algorithms (e.g., SLAM) in the Gazebo simulation environment using ROS',
        'Supporting the integration of sensors and actuators into the existing ROS environment'
      ]
    },
    
  ];
}
