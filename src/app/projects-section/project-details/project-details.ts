import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectData } from '../../models/project-data';

@Component({
  selector: 'app-project-details',
  imports: [],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css'
})
export class ProjectDetails {
  @Input() project?: ProjectData;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
