import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from './project.model';
import { ProjectFilterPipe } from './project-filter.pipe';
import { ProjectModalComponent } from './project-modal/project-modal.component';

@Component({
  standalone: true,
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [CommonModule, ProjectFilterPipe, ProjectModalComponent]
})
export class ProjectsComponent {
  // Liste de toutes les technos possibles (pour affichage des boutons/menus)
  allTechs: string[] = [
    'All',
    'Django',
    'ESP8266',
    'DHT11',
    'Bootstrap',
    'PCB Design',
    'PHP',
    'MySQL',
    'SQLMap',
    'HTML',
    'CSS',
    'JavaScript',
    'Python',
    'Scikit-learn'
  ];

  // Techno sélectionnée
  selectedTech: string = 'All';

  // listeS deS projets
  projects: Project[] = [
    {
      name: 'Projet de Monitoring de Température',
      description: 'Développement d’un système de surveillance de température basé sur Django, ESP8266 et DHT11.',
      technologies: ['Django', 'ESP8266', 'DHT11', 'Bootstrap', 'PCB Design'],
      features: [
        'Affichage des températures en temps réel sur un tableau de bord web',
        'Connexion Wi-Fi de l’ESP8266 pour la transmission des données',
        'Stockage des données sur une base de données pour un historique détaillé',
        'Alertes par e-mail, Telegram et WhatsApp en cas de température anormale',
        'Gestion des utilisateurs avec différents niveaux d’accès',
        'Génération automatique de rapports PDF pour l’historique des relevés',
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
      ]
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
      ]
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
      demoLink: '',
      screenshots: [
        'assets/screens/tic/tic1.png',
        'assets/screens/tic/tic2.png',
        'assets/screens/tic/tic3.png',
        'assets/screens/tic/tic4.png'
      ]
    },
    {
      name: 'Système de Surveillance du Climat (Maquette)',
      description: 'Développement d’une maquette IoT pour surveiller la température et l’humidité en temps réel à l’aide d’une interface web et d’un module ESP8266.',
      technologies: ['ESP8266', 'DHT11', 'Django', 'HTML', 'CSS', 'JavaScript', 'Python', 'Scikit-learn'],
      features: [
        'Collecte des données en temps réel via ESP8266',
        'Affichage dynamique des données climatiques sur une interface web',
        'Collecte et analyse des données avec Machine Learning',
        'Entraînement d’un modèle ML pour prédire les futures données climatiques',
        'Entraînement d’un modèle ML pour détecter les anomalies des mesures climatiques'
      ],
      repoLink: 'https://github.com/aazdagabde/MSO_ITIRC25',
      demoLink: '',
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

        
      ]
    }
  ];

  // Contrôle de la modal
  showModal: boolean = false;
  currentScreens: string[] = []; // captures du projet sélectionné

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
}
