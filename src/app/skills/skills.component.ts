// skills.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';
import { SoftSkillsComponent } from './soft-skills/soft-skills.component';
import { CertificationsComponent } from './certifications/certifications.component';

@Component({
  standalone: true,
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  imports: [
    CommonModule,
    TechnicalSkillsComponent,
    SoftSkillsComponent,
    CertificationsComponent
  ]
})
export class SkillsComponent {}
