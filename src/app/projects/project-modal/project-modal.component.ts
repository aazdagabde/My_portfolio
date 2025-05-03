import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css'],
  imports: [CommonModule],
})
export class ProjectModalComponent {
  @Input() screens: string[] = [];
  @Output() close = new EventEmitter<void>();
  currentIndex = 0;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.onClose();
    } else if (event.key === 'ArrowRight') {
      this.next();
    } else if (event.key === 'ArrowLeft') {
      this.prev();
    }
  }

  next() {
    if (this.screens.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.screens.length;
    }
  }

  prev() {
    if (this.screens.length > 0) {
      this.currentIndex = (this.currentIndex - 1 + this.screens.length) % this.screens.length;
    }
  }

  onClose() {
    this.close.emit();
  }

  selectImage(index: number) {
    this.currentIndex = index;
  }
}