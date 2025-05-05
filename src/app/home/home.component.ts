import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('codeLine', { static: true }) codeLine!: ElementRef;
  @ViewChild('typedName', { static: true }) typedName!: ElementRef;
  @ViewChild('typedSub', { static: true }) typedSub!: ElementRef;

  ngAfterViewInit() {
    // Première animation: la ligne de code
    new Typed(this.codeLine.nativeElement, {
      strings: ['Bonjour, je suis Abdellah Aazdag'],
      typeSpeed: 50,
      backSpeed: 0,
      showCursor: false,
      onComplete: () => {
        // Deuxième animation: le nom/titre
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
            // Troisième animation: le texte secondaire
            new Typed(this.typedSub.nativeElement, {
              strings: [
                'Développeur Angular',
                'Expert Spring Boot',
                'Architecte de solutions',
                'Passionné de DevOps',
                'Full Stack Engineer'
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
    });
  }
}