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
      title: 'Research Assistant',
      logoUrl: 'assets/JEM_Logo.svg', 
      duration: 'Nov 2024 - Nov 2025',
      techStack: ['Python', 'ROS2', 'Moveit2', 'PX4','Gazebo11'],
      tasks: [
        'Designing and implementing algorithms for motion planning, control, and navigation for robotic manipulators and mobile platforms using Arduino and Micro-ROS',
        'Developing and validating navigation algorithms (e.g., SLAM) in the Gazebo simulation environment using ROS',
        'Supporting the integration of sensors and actuators into the existing ROS environment'
      ]
    },
    {
      company: 'Lehrstuhl für Virtuelle Produktentwicklung (VPE) - RPTU',
      title: 'Research Assistant',
      logoUrl: 'assets/VPE.svg', 
      duration: 'May 2024 - Nov 2025',
      techStack: ['Python', 'Sysmlv2', 'Django', 'Langchain','MQTT','IoT','ESP32','Raspberry Pi','SLMs','Docker'],
      tasks: [
        'Programming and connection tasks in the context of the Internet of Things, including setting up a network with ESP32 and Raspberry Pi, implementing protocols such as MQTT, and transferring data to an IoT platform with visualisation and analysis.',
        'Development of a React application and hosting using Docker in combination with other Docker services.',
        'Collaboration on a knowledge graph project in combination with SysML models using LLMs and implementation with Python (Django) and JavaScript.'
      ]
    },
    {
      company: 'Volkswagen Group',
      title: 'Intern',
      logoUrl: 'assets/Volkswagen_Group.jpg', 
      duration: 'May 2024 - August 2024',
      techStack: ['Python', 'Pandas', 'Data Analytics', 'Linux','PyTorch','Qt','ICAS3','Azure'],
      tasks: [
        'Processed data traces and developed automated methods on an in‑vehicle Linux computer.',
        'Developed user interfaces with PySide6 to deliver simple, effective solutions.',
        'Conceptualized and implemented research methodologies in Python.'
      ]
    },
    {
      company: 'Volkswagen Commercial Vehicles',
      title: 'Intern',
      logoUrl: 'assets/VWGroup.png', 
      duration: 'November 2023 - April 2024',
      techStack: ['Confluence', 'Jira', 'Python', 'Matlab','Data Analytics','AWS'],
      tasks: [
        'Contributing hands-on expertise to enhance safety and efficiency in autonomous driving.',
        'Researched ISO 34503:2023 standards for autonomous safety.',
        'Analyzing and optimizing operational design domain strategies .',
        'Worked with a team of 18 members consisting of PhD researchers and Developers.'
      ]
    },
    {
      company: 'Lehrstuhl für Virtuelle Produktentwicklung (VPE) - RPTU',
      title: 'Research Assistant',
      logoUrl: 'assets/VPE.svg', 
      duration: 'February 2023 - October 2023',
      techStack: ['BetaFlight Simulator', 'Grafana', 'MQTT', 'Python','Data Analytics','InfluxDB'],
      tasks: [
        'Developed Python scripts to stream real-time telemetry data via MQTT for remote monitoring',
        'Built data dashboards in Grafana using InfluxDB to analyze sensor performance and system health',
        'Developed and tested low-level logic  with the help of Betaflight for real-time motor synchronization and stabilization on 4-motor BLDC UAV systems.'
      ]
    },
    {
      company: 'Robotics Research Lab - RPTU',
      title: 'Research Assistant',
      logoUrl: 'assets/RRLAB.png', 
      duration: 'February 2023 - October 2023',
      techStack: ['Finroc', 'C++', 'MATLAB', 'Pytorch','Linux','ROS2'],
      tasks: [
        'Developement of Graph-based SLAM and Kalman Filter (EKF/UKF) modules in C++ for the AutoBus and aStrider autonomous platforms',
        'Fused IMU and GPS data for real-time localization and state estimation in pedestrian zones.',
        'Built and integrated ROS sensor interfaces and navigation nodes together with Behavior Trees, focusing on low-latency data synchronization.'
      ]
    },
    {
      company: 'Xitadel',
      title: 'Senior Software Engineer',
      logoUrl: 'assets/Xitadel.png', 
      duration: 'June 2018 - August 2021',
      techStack: ['Finroc', 'C++', 'MATLAB', 'Pytorch','Linux','ROS2'],
      tasks: [
        'Creation of automation scripts (Python) for Finite Element Analysis and dashboards, developed with Python and Qt Framework',
        'Optimized the mid-mesh generation process within ANSA, enhancing efficiency and accuracy for complex geometric simulations.',
        'Implementation and debugging of complex software modules.'
      ]
    },
    
  ];
}
