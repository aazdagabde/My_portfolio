import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from './project.model';
import { ProjectFilterPipe } from './project-filter.pipe';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [CommonModule, ProjectFilterPipe, ProjectModalComponent, FormsModule]
})
export class ProjectsComponent {
  // Liste de toutes les technos possibles (mise à jour avec le CV)
  allTechs: string[] = [
    'All',
    'Angular',
    'Spring Boot',
    'Flutter',
    'React',
    'FastAPI',
    'LangChain',
    'IA/ML',
    'Java',
    'Python',
    'TypeScript',
    'JavaScript',
    'Android SDK',
    'Firebase',
    'PostgreSQL',
    'MySQL',
    'Django',
    'PHP',
    'n8n',
    'Google Gemini',
    'Scikit-learn',
    'ESP8266',
    'DHT11',
    'Bootstrap',
    'PCB Design',
    'SQLMap',
    'HTML',
    'CSS',
    'SQLite'
  ];

  // Techno sélectionnée
  selectedTech: string = 'All';
  searchTerm: string = '';

  // Liste des projets (avec ajouts du CV)
  projects: Project[] = [
    // --- NOUVEAUX PROJETS DU CV ---
    {
      name: 'SmartHire - Plateforme de Recrutement IA',
      description: 'Plateforme web, mobile et IA pour l\'optimisation du tri de candidatures.',
      technologies: ['Spring Boot', 'React', 'Flutter', 'MySQL', 'LangChain', 'n8n', 'Firebase', 'IA/ML', 'Google Gemini'],
      features: [
        'Développement d\'une API REST sécurisée (Spring Security, JWT)',
        'Intégration de l\'IA (LangChain/Gemini) pour le scoring de CV',
        'Interfaces web (React) et mobile (Flutter) connectées',
        'Automatisation des notifications via n8n et Firebase FCM'
      ],
      repoLink: '', // À ajouter si disponible
      demoLink: '', // À ajouter si disponible
      screenshots: ['assets/screens/srec/im1.png',
        'assets/screens/srec/im2.png',
      ], // À remplacer
      thumbnail: 'assets/screens/srec/im1.png', // À remplacer
      completionDate: 'En cours (2025)'
    },
    {
      name: 'EcoWatt - Suivi Énergétique Intelligent (PFA)',
      description: 'Système IoT & IA pour l\'optimisation de la consommation d\'énergie.',
      technologies: ['Spring Boot', 'Angular', 'FastAPI', 'PostgreSQL', 'Scikit-learn', 'IA/ML'],
      features: [
        'Dashboard temps réel (Angular 17) pour détecter la surconsommation',
        'Modèle ML (Scikit-learn) pour détection proactive d\'anomalies',
        'Backend sécurisé (Spring Boot) pour gestion des utilisateurs et alertes'
      ],
      repoLink: '', // À ajouter si disponible
      demoLink: '', // À ajouter si disponible
      screenshots: ['assets/screens/pfa/im1.png',
        'assets/screens/pfa/im2.png',
        'assets/screens/pfa/im3.png',
        'assets/screens/pfa/im4.png',
        'assets/screens/pfa/im5.png',
        'assets/screens/pfa/im6.png',
        'assets/screens/pfa/im7.png',
        'assets/screens/pfa/im8.png',
        'assets/screens/pfa/im9.png',
        'assets/screens/pfa/im10.png',
        'assets/screens/pfa/im11.png',
        'assets/screens/pfa/im12.png',
        'assets/screens/pfa/im13.png',
        'assets/screens/pfa/im14.png'
      
      
      ],
        
      thumbnail: 'assets/screens/pfa/im1.png', // À remplacer
      completionDate: '06/2025'
    },
    {
      name: 'Styliste Virtuel IA - Assistant E-commerce',
      description: 'Chatbot IA (Google Gemini) pour recommandations personnalisées sur site e-commerce.',
      technologies: ['JavaScript', 'Google Gemini', 'LangChain', 'Netlify', 'IA/ML'],
      features: [
        'Widget chatbot intégré en JavaScript pur',
        'Appels à l\'API Google Gemini via LangChain pour la logique de recommandation',
        'Résultat: réduction du temps de recherche de 42%, +18% d\'ajouts au panier'
      ],
      repoLink: '', // À ajouter si disponible
      demoLink: 'https://gentelmanoujda.netlify.app/', // À ajouter si disponible
      screenshots: ['assets/screens/gman/im1.png',
        'assets/screens/gman/im2.png',
        'assets/screens/gman/im3.png'

      ], // À remplacer
      thumbnail: 'assets/screens/gman/im1.png', // À remplacer
      completionDate: '09/2024'
    },
    {
      name: 'Suivi de Vaccination (Android)',
      description: 'Application mobile pour la gestion de calendriers vaccinaux avec assistant IA.',
      technologies: ['Java', 'Android SDK', 'Firebase', 'API REST', 'SQLite'],
      features: [
        'Interface utilisateur native (Android SDK)',
        'Notifications push via Firebase Cloud Messaging',
        'Synchronisation locale (SQLite) et cloud (via API REST)'
      ],
      repoLink: '', // À ajouter si disponible
      demoLink: '', // À ajouter si disponible
      screenshots: ['assets/screens/vax/im1.jpg',
        'assets/screens/vax/im2.jpg',
        'assets/screens/vax/im3.jpg',
        'assets/screens/vax/im4.jpg'
      ], // À remplacer
      thumbnail: 'assets/screens/vax/im1.jpg', // À remplacer
      completionDate: '05/2024'
    },
    // --- ANCIENS PROJETS ---
    {
      name: 'Projet de Monitoring de Température',
      description: 'Développement d\'un système de surveillance de température basé sur Django, ESP8266 et DHT11.',
      technologies: ['Django', 'ESP8266', 'DHT11', 'Bootstrap', 'PCB Design', 'Python'],
      features: [
        'Affichage des températures en temps réel sur un tableau de bord web',
        'Connexion Wi-Fi de l\'ESP8266 pour la transmission des données',
        'Stockage des données sur une base de données pour un historique détaillé',
        'Alertes par e-mail, Telegram et WhatsApp en cas de température anormale',
        'Gestion des utilisateurs avec différents niveaux d\'accès',
        'Génération automatique de rapports PDF pour l\'historique des relevés',
        'Visualisation des données sous forme de graphiques interactifs'
      ],
      repoLink: 'https://github.com/aazdagabde/provesoire',
      demoLink: 'https://aazdagbousslamaiot.pythonanywhere.com/',
      screenshots: [
        'assets/screens/temp/0.png',
        'assets/screens/temp/01.png',
        'assets/screens/temp/1.png',
        'assets/screens/temp/2.png',
        'assets/screens/temp/4.png',
        'assets/screens/temp/5.png',
        'assets/screens/temp/6.png',
        'assets/screens/temp/7.png',
        'assets/screens/temp/8.png',
        'assets/screens/temp/9.png',
        'assets/screens/temp/10.png',
        'assets/screens/temp/11.png'
      ],
      thumbnail: 'assets/screens/temp/0.png',
      completionDate: '01/2025'
    },
    {
      name: 'Projet SQL Injection',
      description: 'Étude et mise en œuvre des attaques par injection SQL pour tester la sécurité des applications web.',
      technologies: ['PHP', 'MySQL', 'SQLMap'],
      features: [
        'Simulation d’attaques SQL pour identifier les failles de sécurité',
        'Détection de vulnérabilités et mise en place de mécanismes de protection',
        'Mise en avant de bonnes pratiques et correctifs pour éviter les injections SQL'
      ],
      repoLink: 'https://github.com/aazdagabde/sql_injection',
      demoLink: '',
      screenshots: [
        'assets/screens/sqlinj/1.png',
        'assets/screens/sqlinj/2.png',
        'assets/screens/sqlinj/3.png',
        'assets/screens/sqlinj/4.png',
        'assets/screens/sqlinj/5.png',
        'assets/screens/sqlinj/6.png',
        'assets/screens/sqlinj/7.png',
        'assets/screens/sqlinj/8.png',
        'assets/screens/sqlinj/9.png',
        'assets/screens/sqlinj/10.png',
        'assets/screens/sqlinj/11.png'
      ],
      thumbnail: 'assets/screens/sqlinj/1.png',
      completionDate: '11/2024'
    },
    {
      name: 'Jeu TIC TAC TOE',
      description: 'Développement d’une application web dynamique pour le jeu de société TIC TAC TOE.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      features: [
        'Interface utilisateur interactive et responsive',
        'Mode Joueur vs Joueur avec détection automatique du gagnant',
        'Logique de jeu en JavaScript pour un rendu fluide et réactif'
      ],
      repoLink: '',
      demoLink: 'https://aazdag-tec-tac-toe.netlify.app/',
      screenshots: [
        'assets/screens/tic/tic1.png',
        'assets/screens/tic/tic2.png',
        'assets/screens/tic/tic3.png',
        'assets/screens/tic/tic4.png'
      ],
      thumbnail: 'assets/screens/tic/tic1.png',
      completionDate: '07/2023'
    },
    {
      name: 'Système de Surveillance du Climat (Maquette)',
      description: 'Développement d’une maquette IoT pour surveiller la température et l’humidité en temps réel à l’aide d’une interface web et d’un module ESP8266.',
      technologies: ['ESP8266', 'DHT11', 'Django', 'HTML', 'CSS', 'JavaScript', 'Python', 'Scikit-learn', 'IA/ML'],
      features: [
        'Collecte des données en temps réel via ESP8266',
        'Affichage dynamique des données climatiques sur une interface web',
        'Collecte et analyse des données avec Machine Learning',
        'Entraînement d’un modèle ML pour prédire les futures données climatiques',
        'Détection d\'anomalies dans les mesures climatiques grâce à l\'IA'
      ],
      repoLink: 'https://github.com/aazdagabde/MSO_ITIRC25',
      demoLink: 'https://mso.pythonanywhere.com/',
      screenshots: [
        'assets/screens/climat/1.png',
        'assets/screens/climat/a1.png',
        'assets/screens/climat/a2.png',
        'assets/screens/climat/a3.png',
        'assets/screens/climat/a4.png',
        'assets/screens/climat/a5.png',
        'assets/screens/climat/a6.png',
        'assets/screens/climat/a7.png',
        'assets/screens/climat/a8.png',
        'assets/screens/climat/a9.png',
        'assets/screens/climat/a10.png',
        'assets/screens/climat/a11.png',
        'assets/screens/climat/a12.png',
        'assets/screens/climat/a13.png',
        'assets/screens/climat/a14.png',
        'assets/screens/climat/a15.png'
      ],
      thumbnail: 'assets/screens/climat/1.png',
      completionDate: '12/2024'
    },
    {
      name: 'Portfolio Développeur Web',
      description: 'Création d’un portfolio dynamique pour présenter mes projets, formations et expériences professionnelles.',
      technologies: ['Angular', 'Spring Boot', 'TypeScript', 'Java', 'HTML', 'CSS'],
      features: [
        'Interface moderne, responsive et animée avec Angular',
        'Backend RESTful sécurisé avec Spring Boot',
        'Système d’authentification et gestion des contenus (projets, formations, certificats, etc.)',
        'Intégration d’un panneau d’administration pour modification en temps réel',
        'Hébergement via Netlify et API déployée sur Render'
      ],
      repoLink: '',
      demoLink: 'https://aazdagabdepf.netlify.app/projects',
      screenshots: [
        'assets/portfolio/i1.png',
        'assets/portfolio/i2.png',
        'assets/portfolio/i3.png',
        'assets/portfolio/i4.png',
        'assets/portfolio/i5.png',
        'assets/portfolio/i6.png',
        'assets/portfolio/i7.png',
        'assets/portfolio/i8.png',
        'assets/portfolio/i9.png',
        'assets/portfolio/i10.png',
        'assets/portfolio/i11.png',
        'assets/portfolio/i12.png',
        'assets/portfolio/i13.png',
        'assets/portfolio/i14.png'
      ],
      thumbnail: 'assets/portfolio/i1.png',
      completionDate: '04/2025'
    }
  ];

  // Contrôle de la modal
  showModal: boolean = false;
  currentScreens: string[] = [];

  selectTechnology(tech: string) {
    this.selectedTech = tech;
  }

  openModalFor(project: Project) {
    this.currentScreens = project.screenshots;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  getUniqueCategories(): string[] {
    const categories = this.projects.map(p => (p as any).category).filter(Boolean);
    return [...new Set(categories)] as string[];
  }
}