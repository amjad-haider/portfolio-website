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
      company: 'iDTRONIC GmbH, Ludwigshafen',
      title: $localize`:@@exp.1.title:Freelance Embedded Software Engineer`,
      logoUrl: '/assets/idtronic.webp',
      logoText: 'iD', // shown instead if logoUrl is empty
      wideLogo: true, // wordmark logo: shown as a rectangle instead of a circle
      duration: $localize`:@@exp.1.duration:Feb 2026 - Jul 2026`,
      techStack: ['Node.js', 'TCP/IP', 'CRC-16/MCRF4xx', 'MQTT', 'Thingsboard', 'SQL', 'IoT'],
      tasks: [
        $localize`:@@exp.1.tasks.1:Built a TCP proxy server in Node.js for protocol parsing of GPS tracker ECUs.`,
        $localize`:@@exp.1.tasks.2:Implemented CRC-validated communication parsers (CRC-16/MCRF4xx and XOR) for embedded systems.`,
        $localize`:@@exp.1.tasks.3:Delivered a real-time telemetry pipeline on the Thingsboard IoT platform with an MQTT uplink decoder.`,
        $localize`:@@exp.1.tasks.4:Managed the SQL database for storage, querying and analysis of telemetry data.`
      ]
    },
    {
      company: 'Institute of Electromobility - RPTU Kaiserslautern',
      title: $localize`:@@exp.2.title:Research Assistant`,
      logoUrl: 'assets/JEM_Logo.svg', 
      duration: $localize`:@@exp.2.duration:Nov 2024 - Nov 2025`,
      techStack: ['Python', 'ROS2', 'Moveit2', 'PX4','Gazebo11'],
      tasks: [
        $localize`:@@exp.2.tasks.1:Designing and implementing algorithms for motion planning, control, and navigation for robotic manipulators and mobile platforms using Arduino and Micro-ROS`,
        $localize`:@@exp.2.tasks.2:Developing and validating navigation algorithms (e.g., SLAM) in the Gazebo simulation environment using ROS`,
        $localize`:@@exp.2.tasks.3:Supporting the integration of sensors and actuators into the existing ROS environment`
      ]
    },
    {
      company: 'Lehrstuhl für Virtuelle Produktentwicklung (VPE) - RPTU',
      title: $localize`:@@exp.3.title:Research Assistant`,
      logoUrl: 'assets/VPE.svg', 
      duration: $localize`:@@exp.3.duration:May 2024 - Nov 2025`,
      techStack: ['Python', 'Sysmlv2', 'Django', 'Langchain','MQTT','IoT','ESP32','Raspberry Pi','SLMs','Docker'],
      tasks: [
        $localize`:@@exp.3.tasks.1:Programming and connection tasks in the context of the Internet of Things, including setting up a network with ESP32 and Raspberry Pi, implementing protocols such as MQTT, and transferring data to an IoT platform with visualisation and analysis.`,
        $localize`:@@exp.3.tasks.2:Development of a React application and hosting using Docker in combination with other Docker services.`,
        $localize`:@@exp.3.tasks.3:Collaboration on a knowledge graph project in combination with SysML models using LLMs and implementation with Python (Django) and JavaScript.`
      ]
    },
    {
      company: 'Volkswagen Group',
      title: $localize`:@@exp.4.title:Intern`,
      logoUrl: 'assets/Volkswagen_Group.jpg', 
      duration: $localize`:@@exp.4.duration:May 2024 - August 2024`,
      techStack: ['Python', 'Pandas', 'Data Analytics', 'Linux','PyTorch','Qt','ICAS3','Azure'],
      tasks: [
        $localize`:@@exp.4.tasks.1:Processed data traces and developed automated methods on an in‑vehicle Linux computer.`,
        $localize`:@@exp.4.tasks.2:Developed user interfaces with PySide6 to deliver simple, effective solutions.`,
        $localize`:@@exp.4.tasks.3:Conceptualized and implemented research methodologies in Python.`
      ]
    },
    {
      company: 'Volkswagen Commercial Vehicles',
      title: $localize`:@@exp.5.title:Intern`,
      logoUrl: 'assets/VWGroup.png', 
      duration: $localize`:@@exp.5.duration:November 2023 - April 2024`,
      techStack: ['Confluence', 'Jira', 'Python', 'Matlab','Data Analytics','AWS'],
      tasks: [
        $localize`:@@exp.5.tasks.1:Contributing hands-on expertise to enhance safety and efficiency in autonomous driving.`,
        $localize`:@@exp.5.tasks.2:Researched ISO 34503:2023 standards for autonomous safety.`,
        $localize`:@@exp.5.tasks.3:Analyzing and optimizing operational design domain strategies .`,
        $localize`:@@exp.5.tasks.4:Worked with a team of 18 members consisting of PhD researchers and Developers.`
      ]
    },
    {
      company: 'Lehrstuhl für Virtuelle Produktentwicklung (VPE) - RPTU',
      title: $localize`:@@exp.6.title:Research Assistant`,
      logoUrl: 'assets/VPE.svg', 
      duration: $localize`:@@exp.6.duration:February 2023 - October 2023`,
      techStack: ['BetaFlight Simulator', 'Grafana', 'MQTT', 'Python','Data Analytics','InfluxDB'],
      tasks: [
        $localize`:@@exp.6.tasks.1:Developed Python scripts to stream real-time telemetry data via MQTT for remote monitoring`,
        $localize`:@@exp.6.tasks.2:Built data dashboards in Grafana using InfluxDB to analyze sensor performance and system health`,
        $localize`:@@exp.6.tasks.3:Developed and tested low-level logic  with the help of Betaflight for real-time motor synchronization and stabilization on 4-motor BLDC UAV systems.`
      ]
    },
    {
      company: 'Robotics Research Lab - RPTU',
      title: $localize`:@@exp.7.title:Research Assistant`,
      logoUrl: 'assets/RRLAB.png', 
      duration: $localize`:@@exp.7.duration:February 2023 - October 2023`,
      techStack: ['Finroc', 'C++', 'MATLAB', 'Pytorch','Linux','ROS2'],
      tasks: [
        $localize`:@@exp.7.tasks.1:Developement of Graph-based SLAM and Kalman Filter (EKF/UKF) modules in C++ for the AutoBus and aStrider autonomous platforms`,
        $localize`:@@exp.7.tasks.2:Fused IMU and GPS data for real-time localization and state estimation in pedestrian zones.`,
        $localize`:@@exp.7.tasks.3:Built and integrated ROS sensor interfaces and navigation nodes together with Behavior Trees, focusing on low-latency data synchronization.`
      ]
    },
    {
      company: 'Xitadel',
      title: $localize`:@@exp.8.title:Senior Software Engineer`,
      logoUrl: 'assets/Xitadel.png', 
      duration: $localize`:@@exp.8.duration:June 2018 - August 2021`,
      techStack: ['Finroc', 'C++', 'MATLAB', 'Pytorch','Linux','ROS2'],
      tasks: [
        $localize`:@@exp.8.tasks.1:Creation of automation scripts (Python) for Finite Element Analysis and dashboards, developed with Python and Qt Framework`,
        $localize`:@@exp.8.tasks.2:Optimized the mid-mesh generation process within ANSA, enhancing efficiency and accuracy for complex geometric simulations.`,
        $localize`:@@exp.8.tasks.3:Implementation and debugging of complex software modules.`
      ]
    },
    
  ];
}
