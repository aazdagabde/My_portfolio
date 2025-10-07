// cursor-halo.directive.ts
import { Directive, HostListener, Renderer2, ElementRef, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appCursorHalo]',
  standalone: true
})
export class CursorHaloDirective implements OnInit {
  private haloElement!: HTMLElement;
  private isBrowser: boolean;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      this.haloElement = this.renderer.createElement('div');
      this.renderer.addClass(this.haloElement, 'cursor-halo');
    }
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.renderer.appendChild(document.body, this.haloElement);
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isBrowser) {
      this.renderer.setStyle(this.haloElement, 'left', `${event.clientX}px`);
      this.renderer.setStyle(this.haloElement, 'top', `${event.clientY}px`);
    }
  }

  @HostListener('document:mouseleave')
  onMouseLeave() {
    if (this.isBrowser) {
      this.renderer.setStyle(this.haloElement, 'opacity', '0');
    }
  }

  @HostListener('document:mouseenter')
  onMouseEnter() {
    if (this.isBrowser) {
      this.renderer.setStyle(this.haloElement, 'opacity', '1');
    }
  }
}