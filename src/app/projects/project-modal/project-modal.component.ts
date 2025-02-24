import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css'],
  imports: [CommonModule],
})
export class ProjectModalComponent {
  // <-- Propriété Input : reçoit la liste d’images
  @Input() screens: string[] = [];

  // <-- On émet un event pour fermer la modal
  @Output() close = new EventEmitter<void>();

  // <-- Index de l’image courante
  currentIndex = 0;

  // Méthode pour aller à l’image suivante
  next() {
    if (this.screens.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.screens.length;
    }
  }

  // Méthode pour aller à l’image précédente
  prev() {
    if (this.screens.length > 0) {
      this.currentIndex = (this.currentIndex - 1 + this.screens.length) % this.screens.length;
    }
  }

  // Fermer la modal
  onClose() {
    this.close.emit();
  }
}
