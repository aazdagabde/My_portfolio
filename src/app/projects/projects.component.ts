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
  allTechs: string[] = ['All', 'Angular', 'Spring Boot', 'Node.js', 'PHP', 'Firebase'];

  // Techno sélectionnée
  selectedTech: string = 'All';

  // Exemple de liste de projets
  projects: Project[] = [
    {
      name: 'Projet de Monitoring de Température',
      description: 'Développement d’un système de surveillance de température basé sur Django, ESP8266 et DHT11.',
      technologies: ['Django', 'ESP8266', 'DHT11', 'Bootstrap', 'PCB Design'],
      features: ['Affichage des températures', 'Connexion Wi-Fi', 'Stockage des données'],
      repoLink: '', // Ajoute le lien GitHub si disponible
      demoLink: '', // Ajoute le lien de démonstration si disponible
      screenshots: [
        'assets/screens/monitoring1.png',
        'assets/screens/monitoring2.png'
      ]
    },
    {
      name: 'Projet SQL Injection',
      description: 'Étude et mise en œuvre des attaques par injection SQL pour tester la sécurité des applications web.',
      technologies: ['PHP', 'MySQL', 'SQLMap'],
      features: ['Simulation d’attaques SQL', 'Détection de vulnérabilités', 'Proposition de solutions de protection'],
      repoLink: '', // Ajoute le lien GitHub si disponible
      demoLink: '', // Ajoute le lien de démonstration si disponible
      screenshots: [
        'assets/screens/sql1.png',
        'assets/screens/sql2.png'
      ]
    },
    {
      name: 'Jeu TIC TAC TOE',
      description: 'Développement d’une application web dynamique pour le jeu de société TIC TAC TOE.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      features: ['Interface utilisateur interactive', 'Mode Joueur vs Joueur', 'Logique du jeu en JavaScript'],
      repoLink: '', // Ajoute le lien GitHub si disponible
      demoLink: '', // Ajoute le lien de démonstration si disponible
      screenshots: [
        'assets/screens/tictactoe1.png',
        'assets/screens/tictactoe2.png'
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
