import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CursorHaloDirective } from './directives/cursor-halo.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, CursorHaloDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  isNavOpen = false;
  isHeaderScrolled = false;

  // Détecte l'événement de scroll sur la fenêtre
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Si le scroll vertical est supérieur à 10px, on passe la variable à true
    this.isHeaderScrolled = window.scrollY > 10;
  }

  // Fonction pour ouvrir/fermer le menu mobile
  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }
}