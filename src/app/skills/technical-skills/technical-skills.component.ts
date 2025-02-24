import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TechnicalSkill {
  category: string;  // ex: "Langages de programmation"
  name: string;      // ex: "Java"
  logo: string;      // chemin vers le logo (ex: "assets/logos/java.png")
  level: number;     // pourcentage de maîtrise (0-100)
}

@Component({
  standalone: true,
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.css'],
  imports: [CommonModule]
})
export class TechnicalSkillsComponent implements OnInit {

  technicalSkills: TechnicalSkill[] = [
    { category: 'Langages de programmation', name: 'Java',        logo: 'assets/logos/java.png',     level: 85 },
    { category: 'Langages de programmation', name: 'JavaScript',  logo: 'assets/logos/js.png',       level: 80 },
    { category: 'Langages de programmation', name: 'TypeScript',  logo: 'assets/logos/ts.png',       level: 75 },
    { category: 'Langages de programmation', name: 'C',           logo: 'assets/logos/c.png',        level: 70 },
    { category: 'Langages de programmation', name: 'C++',         logo: 'assets/logos/cpp.png',      level: 70 },
    { category: 'Langages de programmation', name: 'Python',      logo: 'assets/logos/python.png',   level: 75 },
    { category: 'Langages de programmation', name: 'PHP',         logo: 'assets/logos/php.png',      level: 80 },
    { category: 'Langages de programmation', name: 'R',           logo: 'assets/logos/r.png',        level: 60 },

    { category: 'Frameworks',               name: 'Angular',      logo: 'assets/logos/angular.png',  level: 75 },
    { category: 'Frameworks',               name: 'Spring Boot',  logo: 'assets/logos/spring.png',   level: 70 },
    { category: 'Frameworks',               name: 'Django',       logo: 'assets/logos/django.png',   level: 65 },
    { category: 'Frameworks',               name: 'Laravel',      logo: 'assets/logos/laravel.png',  level: 70 },
    { category: 'Frameworks',               name: 'React',        logo: 'assets/logos/react.png',    level: 65 },
    { category: 'Frameworks',               name: 'JEE',          logo: 'assets/logos/jee.png',      level: 60 },
    { category: 'Frameworks',               name: 'Bootstrap',    logo: 'assets/logos/bootstrap.png',level: 70 },

    { category: 'Bases de données',         name: 'MySQL',        logo: 'assets/logos/mysql.png',    level: 60 },
    { category: 'Bases de données',         name: 'Oracle',       logo: 'assets/logos/oracle.png',   level: 55 },
    { category: 'Bases de données',         name: 'MongoDB',      logo: 'assets/logos/mongodb.png',  level: 50 },

    { category: 'Outils & Logiciels',       name: 'Git',          logo: 'assets/logos/git.png',      level: 75 },
    { category: 'Outils & Logiciels',       name: 'Docker',       logo: 'assets/logos/docker.png',   level: 60 },
    { category: 'Outils & Logiciels',       name: 'MATLAB',       logo: 'assets/logos/matlab.png',   level: 55 },
    { category: 'Outils & Logiciels',       name: 'Jupyter',      logo: 'assets/logos/jupyter.png',  level: 50 },
    { category: 'Outils & Logiciels',       name: 'Microsoft Office', logo: 'assets/logos/office.png', level: 70 },

    { category: 'Méthodologies',            name: 'Agile/Scrum',  logo: 'assets/logos/agile.png',    level: 65 }
];


  categories: string[] = [];

  ngOnInit(): void {
    // Extraire la liste des catégories distinctes
    const catSet = new Set(this.technicalSkills.map(ts => ts.category));
    this.categories = Array.from(catSet);
  }

  // Au lieu d'utiliser la fonction fléchée dans le template, on la met ici
  getSkillsByCategory(cat: string): TechnicalSkill[] {
    return this.technicalSkills.filter(skill => skill.category === cat);
  }
}
