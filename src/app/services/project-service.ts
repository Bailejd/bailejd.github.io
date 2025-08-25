import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ProjectData } from '../models/project-data';
import { PROJECTS } from '../../assets/projectData';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Observable<ProjectData[]> {
    const projects = of(PROJECTS);
    return projects;
  }
}
