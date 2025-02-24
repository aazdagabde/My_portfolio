import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'projectFilter'
})
export class ProjectFilterPipe implements PipeTransform {
  transform(projects: Project[], selectedTech: string): Project[] {
    if (!selectedTech || selectedTech === 'All') {
      return projects;
    }
    return projects.filter(project => 
      project.technologies.includes(selectedTech)
    );
  }
}
