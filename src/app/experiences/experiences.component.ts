import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faCalendarAlt,
  faFileDownload,
  faCode,
  faServer,
  faDatabase,
  faMobileAlt,
  faNetworkWired
} from '@fortawesome/free-solid-svg-icons';
import { 
  faAngular,
  faJs,
  faPython,
  faPhp,
  faJava,
  faNodeJs,
  faGitAlt,
  faDocker
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  // Font Awesome icons
  faCalendarAlt = faCalendarAlt;
  faFileDownload = faFileDownload;
  faCode = faCode;
  faServer = faServer;
  faDatabase = faDatabase;
  faMobileAlt = faMobileAlt;
  faNetworkWired = faNetworkWired;
  faAngular = faAngular;
  faJs = faJs;
  faPython = faPython;
  faPhp = faPhp;
  faJava = faJava;
  faNodeJs = faNodeJs;
  faGitAlt = faGitAlt;
  faDocker = faDocker;

  isVisible: boolean[] = [];
  
  educations = [
    {
      degree: "Cycle d'ingénieur en ITIRC",
      institution: "ENSAO - École Nationale des Sciences Appliquées d'Oujda",
      period: "09/2023 - 09/2026",
      description: "Spécialisation en Ingénierie des Technologies de l'Information et Réseaux de Communication. Acquisition de compétences avancées en développement logiciel, architectures réseaux et systèmes d'information.",
      technologies: [
        { name: "Angular", icon: "fab fa-angular" },
        { name: "Spring Boot", icon: "fas fa-server" },
        { name: "Node.js", icon: "fab fa-node-js" },
        { name: "Docker", icon: "fab fa-docker" },
        { name: "Git", icon: "fab fa-git-alt" },
        { name: "Linux", icon: "fas fa-terminal" },
        { name: "MySQL", icon: "fas fa-database" },
        { name: "Java", icon: "fab fa-java" },
        { name: "PHP", icon: "fab fa-php" },
        { name: "Python", icon: "fab fa-python" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "Réseaux", icon: "fas fa-network-wired" },
        { name: "Cybersécurité", icon: "fas fa-shield-alt" }
      ]
    },
    {
      degree: "DEUG en Sciences Mathématiques et Informatique",
      institution: "Faculté Polydisciplinaire Ouarzazate",
      period: "09/2021 - 06/2023",
      description: "Formation fondamentale en algorithmique, programmation structurée et mathématiques appliquées. Mention Bien obtenue.",
      technologies: [
        { name: "C/C++", icon: "fas fa-code" },
        { name: "Algo", icon: "fas fa-project-diagram" },
        { name: "Maths", icon: "fas fa-square-root-alt" }
      ]
    }
  ];

  experiences = [
    {
      position: "Enquêteur principal",
      company: "Haut-Commissariat au Plan",
      period: "08/2024 - 09/2024",
      description: "Collecte et analyse de données statistiques sur le terrain. Coordination d'une équipe d'enquêteurs et validation des données recueillies. Utilisation d'outils de traitement de données.",
      technologies: [
        { name: "Excel", icon: "fas fa-table" },
        { name: "SPSS", icon: "fas fa-chart-bar" },
        { name: "Travail d'équipe", icon: "fas fa-users" }
      ]
    },
    {
      position: "Organisateur Journée Club ITIRC",
      company: "ENSAO - Club ITIRC",
      period: "10/2023 - 04/2024",
      description: "Planification et coordination de la première édition de la Journée Club ITIRC. Gestion logistique complète, communication avec les intervenants et promotion de l'événement.",
      technologies: [
        { name: "Organisation", icon: "fas fa-tasks" },
        { name: "Communication", icon: "fas fa-comments" },
        { name: "Gestion de projet", icon: "fas fa-project-diagram" }
      ]
    }
  ];

  ngOnInit(): void {
    this.checkVisibility();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkVisibility();
  }

  checkVisibility(): void {
    const items = document.querySelectorAll('.timeline-item');
    items.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const isVisible = (rect.top <= window.innerHeight * 0.8) && 
                       (rect.bottom >= window.innerHeight * 0.2);
      this.isVisible[index] = isVisible;
    });
  }
}