import { Component, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common'; // CommonModule est souvent nécessaire

@Component({
  selector: 'app-about',
  standalone: true, // Assurez-vous que le composant est standalone si c'est le cas
  imports: [CommonModule], // Importez les modules nécessaires
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  // Récupère l'élément du template pour y injecter les particules
  @ViewChild('particles', { static: true }) particles!: ElementRef<HTMLElement>;
  
  private isReducedMotion = false;

  constructor(private renderer: Renderer2) {
    // Détecte si l'utilisateur préfère des animations réduites pour l'accessibilité
    this.isReducedMotion = !!window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  ngAfterViewInit(): void {
    // Crée les particules animées une fois que la vue est prête
    this.createParticles();
  }

  // Fonction pour créer les particules, identique à celle de home.component.ts
  private createParticles() {
    if (this.isReducedMotion) return; // Ne fait rien si les animations sont désactivées
    const container = this.particles?.nativeElement;
    if (!container) return;

    // Nettoie les particules précédentes pour éviter les duplications
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    // Crée 10 particules avec des propriétés aléatoires pour un effet naturel
    for (let i = 0; i < 10; i++) {
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