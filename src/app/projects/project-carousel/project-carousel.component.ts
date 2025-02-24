import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-project-carousel',
  templateUrl: './project-carousel.component.html',
  styleUrls: ['./project-carousel.component.css'],
  imports: [CommonModule],
})
export class ProjectCarouselComponent {
  // Liste des images/captures à afficher
  @Input() screens: string[] = [];

  currentIndex = 0;

  // Passe à l’image suivante
  next() {
    if (this.screens.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.screens.length;
    }
  }

  // Passe à l’image précédente
  prev() {
    if (this.screens.length > 0) {
      this.currentIndex =
        (this.currentIndex - 1 + this.screens.length) % this.screens.length;
    }
  }
}
