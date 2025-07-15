import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExperienceData } from '../../models/experience-data';

@Component({
  selector: 'app-experience-details',
  imports: [],
  templateUrl: './experience-details.html',
  styleUrl: './experience-details.css'
})
export class ExperienceDetails {
  @Input() experience?: ExperienceData;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
