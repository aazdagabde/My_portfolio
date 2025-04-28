import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-project-carousel',
  templateUrl: './project-carousel.component.html',
  styleUrls: ['./project-carousel.component.css']
})
export class ProjectCarouselComponent {
  @Input() screens: string[] = [];
  currentIndex = 0;
  zoomed = false;
  showControls = true;
  private controlsTimeout: any;

  prev(): void {
    this.resetState();
    if (this.screens.length > 0) {
      this.currentIndex = (this.currentIndex - 1 + this.screens.length) % this.screens.length;
    }
  }

  next(): void {
    this.resetState();
    if (this.screens.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.screens.length;
    }
  }

  toggleZoom(): void {
    this.zoomed = !this.zoomed;
    this.resetControlsTimer();
  }

  showControlsTemporarily(): void {
    this.showControls = true;
    this.resetControlsTimer();
  }

  private resetState(): void {
    this.zoomed = false;
    this.resetControlsTimer();
  }

   resetControlsTimer(): void {
    clearTimeout(this.controlsTimeout);
    this.controlsTimeout = setTimeout(() => {
      this.showControls = false;
    }, 3000);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowLeft': this.prev(); break;
      case 'ArrowRight': this.next(); break;
      case 'z': case 'Z': this.toggleZoom(); break;
    }
  }
}