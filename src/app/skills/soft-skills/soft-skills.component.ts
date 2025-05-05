import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SoftSkill {
  name: string;
  level: number; // pourcentage
}

@Component({
  standalone: true,
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.css'],
  imports: [CommonModule],
})
export class SoftSkillsComponent {
  // Données des soft skills (exemple)
  softSkills: SoftSkill[] = [
    { name: 'Communication', level: 80 },
    { name: 'Travail d’équipe', level: 85 },
    { name: 'Adaptabilité', level: 90 },
    { name: 'Gestion du temps', level: 85 },
    { name: 'Résolution de problèmes', level: 85 },
    { name: 'Organisation', level: 80 },
    { name: 'Esprit analytique', level: 85 },
    { name: 'Apprentissage autonome', level: 90 }
];

  


  // Si tu avais besoin de filtrer ou de trier, fais-le avec une méthode.
  // Ex.:
  // getSoftSkills(): SoftSkill[] {
  //   return this.softSkills.filter( ... );
  // }

  // Dans ce cas, on n’a pas besoin d’une flèche dans le template,
  // on utilise *ngFor="let skill of softSkills" directement dans le HTML.
}
