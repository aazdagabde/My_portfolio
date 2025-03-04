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
      title: 'Coursera IBM Databases and SQL for Data Science Certificate',
      skills: ['Python', 'Data Manipulation'],
      verifyLink: 'https://coursera.org/verify/XXX',
      image: 'assets/certificats/IBM_DATA.jpg',
      platformLogo: 'assets/logos/IBM.svg'
    },
    {
      title: 'Coursera HTML, CSS & JS for Web Developers',
      skills: ['HTML5', 'CSS3', 'JavaScript'],
      verifyLink: 'https://coursera.org/verify/YYY',
      image: 'assets/certificats/web.jpg',
      platformLogo: 'assets/logos/coursera.png'
    },
    {
      title: '•	Coursera Database Structures and Management with MySQL (with honors)',
      skills: ['MYsql', 'Conception', 'PHPmyADMIN'],
      verifyLink: 'https://coursera.org/verify/YYY',
      image: 'assets/certificats/mysql.jpeg',
      platformLogo: 'assets/logos/coursera.png'
    },
    {
      title: '•		CCNA: Introduction to Networks',
      skills: ['IP connectivity', 'IPv4 And IPv6 Addressing ','Ethernet', 'Network Topologies',  'Subnetting', 'VLANs', 'Routing Protocols', 'Network Address Translation', 'DHCP and NAT', 'ACLs'],
      verifyLink: 'https://coursera.org/verify/YYY',
      image: 'assets/certificats/mysql.jpeg',
      platformLogo: 'assets/logos/coursera.png'
    },
  ];
}
