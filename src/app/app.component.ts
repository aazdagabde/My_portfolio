import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CursorHaloDirective } from './directives/cursor-halo.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, CursorHaloDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  isNavOpen = false;
  isHeaderScrolled = false;
  isLightMode = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId) && typeof localStorage !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light') {
        this.isLightMode = true;
        if (typeof document !== 'undefined') {
          document.body.classList.add('light-mode');
        }
      }
    }
  }

  // Détecte l'événement de scroll sur la fenêtre
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId) && typeof window !== 'undefined') {
      // Si le scroll vertical est supérieur à 10px, on passe la variable à true
      this.isHeaderScrolled = window.scrollY > 10;
    }
  }

  // Fonction pour ouvrir/fermer le menu mobile
  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }

  // Fonction pour basculer entre les thèmes
  toggleTheme(): void {
    this.isLightMode = !this.isLightMode;
    if (isPlatformBrowser(this.platformId) && typeof document !== 'undefined' && typeof localStorage !== 'undefined') {
      if (this.isLightMode) {
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
      } else {
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
      }
    }
  }
}