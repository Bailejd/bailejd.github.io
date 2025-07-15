import { Component, signal } from '@angular/core';

import { ExperienceData } from '../../models/experience-data';
import { ExperienceService } from '../../services/experience-service';
import { Modal } from '../../shared/modal/modal';
import { CommonModule } from '@angular/common';
import { ExperienceDetails } from "../experience-details/experience-details";

@Component({
  selector: 'app-experience',
  imports: [CommonModule, Modal, ExperienceDetails],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  experiences: ExperienceData[] = [];
  selectedExperience = signal<ExperienceData | null>(null);

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.getExperiences();
    console.log(this.experiences);
  }

  getExperiences() {
    this.experienceService.getExperiences()
      .subscribe(experiences => this.experiences = experiences.sort((a, b) => b.id - a.id));
  }

  openModal(experience: ExperienceData) {
    document.body.style.overflow = 'hidden';
    this.selectedExperience.set(experience);
  }

  closeModal() {
    document.body.style.overflow = '';
    this.selectedExperience.set(null);
  }
}
