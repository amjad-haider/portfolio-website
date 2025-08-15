import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class SidebarComponent {
  profileData = {
    name: 'Amjad Haider',
    title: 'Robotics Developer',
    affiliation: 'University of Kaiserslautern-Landau',
    email: 'amjad.haider@gmx.de',
    profileImage: 'assets/profile.jpg',
    cvUrl: 'assets/CV.pdf',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/amjadhaider/',
      github: 'https://github.com/amjad-haider'
    }
  };

  constructor() { }

  onImageError(event: any) {
    const img = event.target;
    img.style.display = 'none';
    
    const placeholder = document.createElement('div');
    placeholder.className = 'profile-image-placeholder';
    placeholder.textContent = this.getInitials(this.profileData.name);
    placeholder.style.cssText = `
      width: 180px;
      height: 180px;
      border-radius: 50%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 48px;
      font-weight: bold;
      border: 4px solid #f3f4f6;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    `;
    
    img.parentElement?.appendChild(placeholder);
  }

  private getInitials(name: string): string {
    return name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase())
      .join('')
      .substring(0, 2);
  }
}