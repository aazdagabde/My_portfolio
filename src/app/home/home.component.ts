import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('typedName', { static: true }) typedName!: ElementRef;
  @ViewChild('typedSub', { static: true }) typedSub!: ElementRef;

  ngAfterViewInit() {
    // Effet typewriter pour le nom/titre
    new Typed(this.typedName.nativeElement, {
      strings: ['Abdellah Aazdag', 'Développeur Full Stack'],
      typeSpeed: 70,
      backSpeed: 50,
      loop: false,
      showCursor: true,
      cursorChar: '|',
      smartBackspace: true,
      onComplete: () => {
        // Supprime le curseur après la saisie
        const cursor = this.typedName.nativeElement.nextElementSibling;
        if (cursor && cursor.classList.contains('typed-cursor')) {
          cursor.remove();
        }
        // Lance l'effet typewriter pour le texte secondaire
        new Typed(this.typedSub.nativeElement, {
          strings: [
            'Web & Mobile Development',
            'Backend & API Design',
            'Project Management',
            'IT Enthusiast',
            'Problem Solver'
          ],
          typeSpeed: 60,
          backSpeed: 40,
          loop: true,
          backDelay: 2000,
          showCursor: true,
          cursorChar: '|'
        });
      }
    });
  }
}