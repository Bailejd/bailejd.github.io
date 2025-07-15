import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectData } from '../../models/project-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class Project {
  @Input() project!: ProjectData;
  @Output() viewDetails = new EventEmitter<void>();

  onToggle() {
    this.viewDetails.emit();
  }
}
