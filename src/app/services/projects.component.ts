/*import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../services/project.service';

@Component({
  standalone: true,
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [CommonModule],
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }
}
*/