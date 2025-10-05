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
  faNetworkWired,
  faUsers,
  faTasks,
  faComments,
  faProjectDiagram,
  faGraduationCap,
  faBriefcase
} from '@fortawesome/free-solid-svg-icons';
import { 
  faAngular,
  faJs,
  faPython,
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
  faJava = faJava;
  faNodeJs = faNodeJs;
  faGitAlt = faGitAlt;
  faDocker = faDocker;
  faUsers = faUsers;
  faTasks = faTasks;
  faComments = faComments;
  faProjectDiagram = faProjectDiagram;
  faGraduationCap = faGraduationCap;
  faBriefcase = faBriefcase;
  
  isVisible: boolean[] = [];
  
  experiences = [
    {
      position: "Développeur Mobile Full-Stack (Stage)",
      company: "OpenSNZ Technology SARL, Maroc",
      period: "07/2025 - 09/2025",
      description: "Développement de fonctionnalités clés pour une application mobile (Flutter) de numérisation des interventions terrain, incluant des formulaires dynamiques et un système de synchronisation 'offline-first'. Intégration de l'ERP Dolibarr via des API RESTful.",
      technologies: [
        { name: "Flutter", icon: "fas fa-mobile-alt" },
        { name: "Dart", icon: "fas fa-code" },
        { name: "BLoC", icon: "fas fa-project-diagram" },
        { name: "API REST", icon: "fas fa-server" },
        { name: "Git", icon: "fab fa-git-alt" },
        { name: "Jira", icon: "fas fa-tasks" }
      ]
    },
    {
      position: "Enquêteur Principal - RGPH 2024",
      company: "Haut-Commissariat au Plan (HCP), Maroc",
      period: "08/2024 - 09/2024",
      description: "Coordination d'équipes terrain dans le cadre du recensement national (RGPH 2024). Vérification et reporting de la qualité des données collectées.",
      technologies: [
        { name: "Coordination", icon: "fas fa-users" },
        { name: "Reporting", icon: "fas fa-chart-bar" },
        { name: "Qualité Données", icon: "fas fa-check-double" }
      ]
    }
  ];

  educations = [
    {
      degree: "Cycle Ingénieur - ITIRC",
      institution: "École Nationale des Sciences Appliquées (ENSA), Oujda",
      period: "2023 - 2026",
      description: "Spécialisation en Ingénierie des Technologies de l'Information et Réseaux de Communication. Compétences en développement logiciel, architectures réseaux et systèmes d'information.",
      technologies: [
        { name: "Spring Boot", icon: "fas fa-server" },
        { name: "Angular", icon: "fab fa-angular" },
        { name: "Flutter", icon: "fas fa-mobile-alt" },
        { name: "Docker", icon: "fab fa-docker" },
        { name: "Kubernetes", icon: "fas fa-dharmachakra" },
        { name: "IA/ML", icon: "fas fa-brain" },
        { name: "Java", icon: "fab fa-java" },
        { name: "Python", icon: "fab fa-python" }
      ]
    },
    {
      degree: "DEUG en Mathématiques et Informatique",
      institution: "Faculté Polydisciplinaire de Ouarzazate",
      period: "2021 - 2023",
      description: "Formation fondamentale en algorithmique, programmation structurée (C/C++) et mathématiques appliquées.",
      technologies: [
        { name: "C/C++", icon: "fas fa-code" },
        { name: "Algorithmique", icon: "fas fa-sitemap" },
        { name: "Mathématiques", icon: "fas fa-square-root-alt" }
      ]
    },
    {
      degree: "Baccalauréat en Sciences Mathématiques B",
      institution: "Lycée Salah Eddine El Ayyoubi, Tinghir",
      period: "2021",
      description: "Obtention du baccalauréat avec une spécialisation en mathématiques, ouvrant la voie aux études supérieures en sciences et ingénierie.",
      technologies: []
    }
  ];

  extracurricular = [
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
    // Initialise le tableau isVisible pour tous les éléments
    const totalItems = this.experiences.length + this.educations.length + this.extracurricular.length;
    this.isVisible = Array(totalItems).fill(false);
    
    // Premier check au chargement
    setTimeout(() => this.checkVisibility(), 100);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkVisibility();
  }

  checkVisibility(): void {
    const items = document.querySelectorAll('.timeline-item');
    items.forEach((item, index) => {
      if (this.isVisible[index]) return; // Ne pas re-vérifier si déjà visible
      
      const rect = item.getBoundingClientRect();
      const isVisible = (rect.top <= window.innerHeight * 0.8) && 
                       (rect.bottom >= window.innerHeight * 0.2);
      if (isVisible) {
        this.isVisible[index] = true;
      }
    });
  }
}