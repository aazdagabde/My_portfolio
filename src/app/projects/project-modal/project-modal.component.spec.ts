import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css'],
  imports: [CommonModule]
})
export class ProjectModalComponent {
  @Input() screens: string[] = [];
  @Output() close = new EventEmitter<void>();

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.screens.length;
  }
  prev() {
    this.currentIndex = 
      (this.currentIndex - 1 + this.screens.length) % this.screens.length;
  }
  onClose() {
    this.close.emit();
  }
}
