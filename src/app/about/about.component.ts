import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [CommonModule, FontAwesomeModule]
})
export class AboutComponent implements OnInit {
  // Font Awesome icons
  faMapMarkerAlt = faMapMarkerAlt;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faArrowRight = faArrowRight;

  ngOnInit(): void {
    // Ajoutez ici toute initialisation nécessaire
  }
}