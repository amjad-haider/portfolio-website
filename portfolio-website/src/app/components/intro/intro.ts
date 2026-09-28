import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.html',
  styleUrl: './intro.css'
})
export class Intro {
  // Same message ID as the sidebar CV link, so the German site offers the German CV
  cvUrl = $localize`:@@profile.cvUrl:/assets/CV.pdf`;

  // Logos live in /assets/tech/<logo>.svg; items without a logo show a text badge
  coreStack = [
    {
      name: $localize`:@@stack.languages:Languages`,
      items: [
        { name: 'C++17 / 23', logo: 'cplusplus' },
        { name: 'Python', logo: 'python' },
        { name: 'C#', logo: 'csharp' },
        { name: 'Java', logo: 'java' },
        { name: 'Bash', logo: 'bash' }
      ]
    },
    {
      name: $localize`:@@stack.simulation:Robotics & Simulation`,
      items: [
        { name: 'ROS 2', logo: 'ros' },
        { name: 'Gazebo', logo: 'gazebo' },
        { name: 'Unreal Engine', logo: 'unrealengine' },
        { name: 'Unity', logo: 'unity' },
        { name: 'MATLAB / Simulink', logo: 'matlab' },
        { name: 'OpenCV', logo: 'opencv' }
      ]
    },
    {
      name: $localize`:@@stack.tooling:Desktop & Tooling`,
      items: [
        { name: 'Qt', logo: 'qt' },
        { name: 'ImGui', badge: 'Im' },
        { name: 'CMake', logo: 'cmake' },
        { name: 'Git', logo: 'git' },
        { name: 'Linux', logo: 'linux' },
        { name: 'LaTeX', logo: 'latex' }
      ]
    },
    {
      name: $localize`:@@stack.devops:DevOps & Automation`,
      items: [
        { name: 'Docker', logo: 'docker' },
        { name: 'Kubernetes', logo: 'kubernetes' },
        { name: 'GitHub Actions', logo: 'githubactions' },
        { name: 'Jenkins', logo: 'jenkins' },
        { name: 'Ansible', logo: 'ansible' },
        { name: 'n8n', logo: 'n8n' },
        { name: 'AWS', logo: 'aws' }
      ]
    },
    {
      name: $localize`:@@stack.ai:AI, Embedded & IoT`,
      items: [
        { name: 'PyTorch', logo: 'pytorch' },
        { name: 'TensorFlow', logo: 'tensorflow' },
        { name: 'Azure AI', logo: 'azure' },
        { name: 'MQTT', logo: 'mqtt' },
        { name: 'Raspberry Pi', logo: 'raspberrypi' },
        { name: 'Grafana', logo: 'grafana' },
        { name: 'ThingsBoard', logo: 'thingsboard' }
      ]
    },
    {
      name: $localize`:@@stack.web:Web`,
      items: [
        { name: 'React', logo: 'react' },
        { name: 'Angular', logo: 'angular' },
        { name: 'Node.js', logo: 'nodejs' }
      ]
    }
  ];

  // This is the "Dummy" function. 
  // It accepts the ID but does nothing, which stops the red error.
  scrollTo(sectionId: string) {
    // Logic can be added here later!
    console.log('Scroll requested to:', sectionId);
  }

}
