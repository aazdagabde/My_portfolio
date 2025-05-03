import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'projectFilter'
})
export class ProjectFilterPipe implements PipeTransform {
  transform(projects: Project[], selectedTech: string, searchTerm: string): Project[] {
    let filteredProjects = projects;
    
    // Filtre par technologie
    if (selectedTech && selectedTech !== 'All') {
      filteredProjects = filteredProjects.filter(project => 
        project.technologies.includes(selectedTech)
      );
    }
    
    // Filtre par recherche
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filteredProjects = filteredProjects.filter(project => 
        project.name.toLowerCase().includes(term) || 
        project.description.toLowerCase().includes(term) ||
        project.technologies.some(tech => tech.toLowerCase().includes(term))
      );
    }
    
    return filteredProjects;
  }
}