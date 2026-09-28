import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, 
    MatCardModule, 
    MatIconModule,
    MatButtonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
// Define your project data here; cards without an image show the icon header instead
  projects: {
    title: string;
    description: string;
    techStack: string[];
    githubLink: string;
    liveLink: string | null;
    imageUrl?: string;
    icon?: string;
    inProgress?: boolean;
  }[] = [
    {
      title: 'FleetPulse',
      description: $localize`:@@proj.fleetpulse.description:Predictive maintenance platform for commercial vehicle fleets. A C# simulator streams ECU telemetry over gRPC to Spring Boot microservices, which store it per service in PostgreSQL, fan it out through Kafka and score vehicle risk, backed by a gradient-boosted model trained in Python and exported to ONNX. Includes a JWT-secured gateway, alerting, work orders and a Vaadin ops dashboard.`,
      techStack: ['Java', 'Spring Boot', 'gRPC', 'Kafka', 'PostgreSQL', 'Docker', 'C#', 'Python', 'ONNX', 'GitHub Actions'],
      githubLink: 'https://github.com/amjad-haider/fleetpulse',
      liveLink: null,
      imageUrl: '/assets/projects/fleetpulse-architecture.svg'
    },
    {
      title: 'Lanelet2 Algorithms',
      description: $localize`:@@proj.lanelet.description:Reimplementing core Lanelet2 HD-map algorithms for autonomous driving from scratch in C++17 (Frenet conversion, map matching, routing and map validation) and grading each implementation against the library's own reference output.`,
      techStack: ['C++17', 'CMake', 'GoogleTest', 'Lanelet2', 'Autonomous Driving'],
      githubLink: 'https://github.com/amjad-haider/lanelet2-algorithms',
      liveLink: null,
      icon: 'route',
      inProgress: true
    },
    {
      title: $localize`:@@proj.gait.title:Humanoid Gait with Reinforcement Learning`,
      description: $localize`:@@proj.gait.description:Reproducible PPO training and evaluation pipeline for the MuJoCo Humanoid-v5 environment, with a structured ablation study over observation components, reward shaping and control frequency.`,
      techStack: ['Python', 'PyTorch', 'Stable-Baselines3', 'MuJoCo', 'Gymnasium'],
      githubLink: 'https://github.com/amjad-haider/Gait_with_RL',
      liveLink: null,
      icon: 'directions_walk',
      inProgress: true
    },
    {
      title: 'IoT Anomaly Detection Lab',
      description: $localize`:@@proj.iot.description:Staged progression from statistical anomaly detection (rolling z-score, IQR) to classical machine learning (Isolation Forest, Local Outlier Factor, One-Class SVM), working toward anomaly detection on real IoT network traffic from the VARIoT dataset.`,
      techStack: ['Python', 'scikit-learn', 'NumPy', 'Pandas', 'IoT'],
      githubLink: 'https://github.com/amjad-haider/iot-anomaly-detection-lab',
      liveLink: null,
      icon: 'sensors',
      inProgress: true
    }
  ];
}