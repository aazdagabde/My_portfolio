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
      verifyLink: 'https://www.credly.com/badges/8e12e61b-8770-486f-899f-7b9df8eb887d/public_url',
      image: 'assets/certificats/IBM_DATA.jpg',
      platformLogo: 'assets/logos/IBM.svg'
    },
    {
      title: 'Coursera HTML, CSS & JS for Web Developers',
      skills: ['HTML5', 'CSS3', 'JavaScript'],
      verifyLink: 'https://www.coursera.org/account/accomplishments/verify/DM3KLR9RC37F',
      image: 'assets/certificats/web.jpg',
      platformLogo: 'assets/logos/coursera.png'
    },
    {
      title: '•	Coursera Database Structures and Management with MySQL (with honors)',
      skills: ['MYsql', 'Conception', 'PHPmyADMIN'],
      verifyLink: 'https://www.coursera.org/account/accomplishments/verify/RCJG4UERJ34Z',
      image: 'assets/certificats/mysql.jpeg',
      platformLogo: 'assets/logos/coursera.png'
    },
    {
      title: '•		CCNA: Introduction to Networks',
      skills: ['IP connectivity', 'IPv4 And IPv6 Addressing ','Ethernet', 'Network Topologies',  'Subnetting', 'VLANs', 'Routing Protocols', 'Network Address Translation', 'DHCP and NAT', 'ACLs'],
      verifyLink: 'https://www.credly.com/badges/dcddfb5a-258e-4179-885b-eaf610e56a22/public_url',
      image: 'assets/certificats/cisco.jpeg',
      platformLogo: 'assets/logos/cisco.png'
    },
  ];
}
