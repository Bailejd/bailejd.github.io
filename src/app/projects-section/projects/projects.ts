import { Component, signal } from '@angular/core';

import { ProjectData } from '../../models/project-data';
import { ProjectService } from '../../services/project-service';
import { Project } from "../project/project";
import { CommonModule } from '@angular/common';
import { ProjectDetails } from "../project-details/project-details";
import { Modal } from '../../shared/modal/modal';

@Component({
  selector: 'app-projects',
  imports: [Project, CommonModule, Modal, ProjectDetails],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects: ProjectData[] = [];
  selectedProject = signal<ProjectData | null>(null);
  
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
  }

  openModal(project: ProjectData) {
    document.body.style.overflow = 'hidden';
    this.selectedProject.set(project);
  }

  closeModal() {
    document.body.style.overflow = '';
    this.selectedProject.set(null);
  }
}
