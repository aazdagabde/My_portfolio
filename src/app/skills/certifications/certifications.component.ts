import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Certification {
  title: string;
  skills: string[];
  verifyLink: string;   // lien de vérification
  image: string;        // image du certificat (verso)
  platformLogo: string; // logo de la plateforme (recto)
}

@Component({
  standalone: true,
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css'],
  imports: [CommonModule],
})
export class CertificationsComponent {
  certs: Certification[] = [
    {
      title: 'Coursera Python Data Structures',
      skills: ['Python', 'Data Manipulation'],
      verifyLink: 'https://coursera.org/verify/XXX',
      image: 'assets/certific/IBM_DATA.jpg',
      platformLogo: 'assets/logos/IBM.svg'
    },
    {
      title: 'Coursera HTML, CSS & JS for Web Developers',
      skills: ['HTML5', 'CSS3', 'JavaScript'],
      verifyLink: 'https://coursera.org/verify/YYY',
      image: 'assets/certs/webdev_cert.jpg',
      platformLogo: 'assets/logos/coursera.png'
    },
    // ...
  ];
}
