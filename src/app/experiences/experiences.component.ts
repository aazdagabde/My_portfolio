import { Component, AfterViewInit, ElementRef, ViewChild, Renderer2, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendarAlt, faFileDownload, faBriefcase, faGraduationCap, faUsers, faTasks, faComments, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements AfterViewInit, OnInit {
  @ViewChild('particles', { static: true }) particles!: ElementRef<HTMLElement>;
  private isReducedMotion = false;

  // Font Awesome Icons
  faCalendarAlt = faCalendarAlt;
  faFileDownload = faFileDownload;
  faBriefcase = faBriefcase;
  faGraduationCap = faGraduationCap;
  faUsers = faUsers;

  constructor(private renderer: Renderer2) {
    this.isReducedMotion = !!window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  ngOnInit(): void {
    // Data can be fetched here in a real application
  }

  ngAfterViewInit(): void {
    this.createParticles();
  }

  // Vos données d'expériences, formation, etc.
  experiences = [
    {
      position: "Développeur Mobile Full-Stack (Stage)",
      company: "OpenSNZ Technology SARL, Maroc",
      period: "Juil. - Sep. 2025",
      description: "Développement de fonctionnalités clés pour une application mobile (Flutter) de numérisation des interventions terrain. Implémentation de formulaires dynamiques et d'un système de synchronisation 'offline-first'.",
      technologies: [
        { name: "Flutter", icon: "fas fa-mobile-alt" },
        { name: "Dart", icon: "fas fa-code" },
        { name: "BLOC", icon: "fas fa-cubes" },
        { name: "API REST", icon: "fas fa-server" },
        { name: "Git", icon: "fab fa-git-alt" }
      ]
    },
    {
      position: "Enquêteur Principal - RGPH 2024",
      company: "Haut-Commissariat au Plan (HCP), Maroc",
      period: "Août - Sep. 2024",
      description: "Coordination d'équipes terrain dans le cadre du recensement national (RGPH 2024). Vérification et reporting qualité des données collectées.",
      technologies: []
    }
  ];

  educations = [
    {
      degree: "Cycle Ingénieur - ITIRC",
      school: "École Nationale des Sciences Appliquées (ENSA), Oujda",
      period: "2023 - 2026",
      technologies: [
        { name: "Développement Web", icon: "fas fa-code" },
        { name: "IA/ML", icon: "fas fa-robot" },
        { name: "Réseaux", icon: "fas fa-network-wired" }
      ]
    },
    {
      degree: "DEUG en Mathématiques et Informatique",
      school: "Faculté Polydisciplinaire de Ouarzazate",
      period: "2021 - 2023",
      technologies: []
    }
  ];

  extracurricular = [
    {
      position: "Organisateur Journée Club ITIRC",
      company: "ENSAO - Club ITIRC",
      period: "2023 - 2024",
      description: "Planification et coordination de la première édition de la Journée Club ITIRC, gérant la logistique, la communication et la promotion de l'événement.",
      technologies: [
        { name: "Gestion de projet", icon: "fas fa-project-diagram" },
        { name: "Communication", icon: "fas fa-comments" },
        { name: "Organisation", icon: "fas fa-tasks" }
      ]
    }
  ];

  // Fonction pour créer les particules
  private createParticles() {
    if (this.isReducedMotion) return;
    const container = this.particles?.nativeElement;
    if (!container) return;

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    for (let i = 0; i < 15; i++) { // Un peu plus de particules pour une page plus grande
      const p = this.renderer.createElement('div');
      this.renderer.addClass(p, 'particle');
      const size = Math.floor(Math.random() * 8) + 3;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const delay = Math.random() * 8;
      const alpha = (0.06 + Math.random() * 0.26).toFixed(2);
      const g = 180 + Math.floor(Math.random() * 75);
      this.renderer.setStyle(p, 'width', `${size}px`);
      this.renderer.setStyle(p, 'height', `${size}px`);
      this.renderer.setStyle(p, 'left', `${left}%`);
      this.renderer.setStyle(p, 'top', `${top}%`);
      this.renderer.setStyle(p, 'position', 'absolute');
      this.renderer.setStyle(p, 'borderRadius', '50%');
      this.renderer.setStyle(p, 'background', `rgba(0, ${g}, 255, ${alpha})`);
      this.renderer.setStyle(p, 'animation', `float-particle ${8 + Math.random() * 12}s linear infinite`);
      this.renderer.setStyle(p, 'animationDelay', `${delay}s`);
      this.renderer.appendChild(container, p);
    }
  }
}