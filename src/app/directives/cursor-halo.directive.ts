// cursor-halo.directive.ts
import { Directive, HostListener, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCursorHalo]',
  standalone: true
})
export class CursorHaloDirective implements OnInit {
  private haloElement: HTMLElement;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.haloElement = this.renderer.createElement('div');
    this.renderer.addClass(this.haloElement, 'cursor-halo');
  }

  ngOnInit(): void {
    this.renderer.appendChild(document.body, this.haloElement);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.renderer.setStyle(this.haloElement, 'left', `${event.clientX}px`);
    this.renderer.setStyle(this.haloElement, 'top', `${event.clientY}px`);
  }

  @HostListener('document:mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(this.haloElement, 'opacity', '0');
  }

  @HostListener('document:mouseenter')
  onMouseEnter() {
    this.renderer.setStyle(this.haloElement, 'opacity', '1');
  }
}