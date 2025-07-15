import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ExperienceData } from '../models/experience-data';
import { EXPERIENCES } from '../../assets/experienceData';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }

  getExperiences(): Observable<ExperienceData[]> {
    const experiences = of(EXPERIENCES);
    return experiences;
  }
}
