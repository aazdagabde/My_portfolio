import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  projects = [
    {
      title: 'Monitoring de Température',
      description: 'Développement d’un système de surveillance (Django, ESP8266, DHT11, Bootstrap).',
      image: 'assets/images/monitoring_temp.jpg',
      github: 'https://github.com/aazdagabde/monitoring_temp'
    },
    {
      title: 'Projet SQL Injection',
      description: 'Étude et mise en œuvre d’attaques par injection SQL (PHP, MySQL, SQLMap).',
      image: 'assets/images/sql_injection.jpg',
      github: 'https://github.com/aazdagabde/sql_injection'
    }
  ];

  getProjects() {
    return this.projects;
  }
}
