import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-carousel',
  templateUrl: './project-carousel.component.html',
  styleUrls: ['./project-carousel.component.css']
})
export class ProjectCarouselComponent {
  @Input() screens: string[] = [];
  currentIndex = 0;
  zoomed = false; // État du zoom

  prev(): void {
    if (this.screens.length > 0) {
      this.currentIndex = (this.currentIndex - 1 + this.screens.length) % this.screens.length;
      this.zoomed = false; // on réinitialise le zoom quand on change d'image
    }
  }

  next(): void {
    if (this.screens.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.screens.length;
      this.zoomed = false; // on réinitialise le zoom quand on change d'image
    }
  }

  toggleZoom(): void {
    this.zoomed = !this.zoomed;
  }
}
