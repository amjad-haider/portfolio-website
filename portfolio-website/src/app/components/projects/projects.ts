import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, 
    MatCardModule, 
    MatIconModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
// Define your project data here
  projects = [
    {
      title: 'Autonomous Factory Automation System',
      // subtitle: 'Multi-Robot Coordination & Inverse Kinematics in Webots',
      description: 'Designed and simulated a complete industrial pipeline in Webots involving synchronized mobile robots and robotic arms for end-to-end material handling.',
      techStack: ['Python', 'Webots', 'Inverse Kinematics', 'Industrial Automation'],
      githubLink: '', // Replace with your actual link
      liveLink: null, // Or replace with a link to a live demo
      imageUrl: 'assets/webots.gif' // Add an image to your assets folder
    },
    {
      title: 'C++ Pathfinding Algorithm Visualizer',
      description: 'Implemented Dijkstra\'s and A* search algorithms in C++ to find the shortest path in a grid. Focus on performance and algorithm complexity.',
      techStack: ['C++', 'SDL2', 'Algorithms'],
      githubLink: 'https://github.com/amjad-haider/cpp-pathfinder',
      liveLink: null,
      imageUrl: 'assets/project-pathfinder.png'
    },
    // Add more projects here
  ];
}