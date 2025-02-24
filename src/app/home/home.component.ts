import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import Typed from 'typed.js';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule]
})
export class HomeComponent implements OnInit {

  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;

  ngOnInit(): void {
    const options = {
      strings: [
        'Abdellah Aazdag<br>Développeur Full Stack Java/Angular<br>' +
        '<span class="tagline">Passionné par l’innovation technologique et le développement web</span>'
      ],
      typeSpeed: 30,
      backSpeed: 20,
      showCursor: true,
      cursorChar: '|',
      loop: false
    };
    if (typeof window !== 'undefined') {
      new Typed(this.typedElement.nativeElement, options);
    }
  }
}
