// project-carousel.component.ts
import { Component, Input, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Project } from '../project.model';

@Component({
  selector: 'app-project-carousel',
  standalone: true,
  templateUrl: './project-carousel.component.html',
  styleUrls: ['./project-carousel.component.css'],
  animations: [
    trigger('slideAnimation', [
      transition(':increment', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms ease-out', style({ transform: 'translateX(0%)' }))
      ])
    ])
  ]
})
export class ProjectCarouselComponent implements OnInit, OnDestroy {
  @Input() projects: Project[] = [];
  currentIndex = 0;
  private intervalId: any;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      this.stopAutoSlide();
    }
  }

  startAutoSlide(): void {
    if (this.isBrowser) {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 3000);
    }
  }

  stopAutoSlide(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
  }
}