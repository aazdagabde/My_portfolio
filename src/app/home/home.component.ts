// home.component.ts
import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild, Renderer2, HostListener } from '@angular/core';
import Typed from 'typed.js';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('typedName', { static: true }) typedName!: ElementRef<HTMLElement>;
  @ViewChild('typedSub', { static: true }) typedSub!: ElementRef<HTMLElement>; // SPAN ciblé
  @ViewChild('glassCard', { static: true }) glassCard!: ElementRef<HTMLElement>;
  @ViewChild('particles', { static: true }) particles!: ElementRef<HTMLElement>;

  private isReducedMotion = false;
  private typedNameInstance: any = null;
  private typedSubInstance: any = null;
  private animationFrameId: number | null = null;

  constructor(private renderer: Renderer2) {
    this.isReducedMotion = !!window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  ngAfterViewInit(): void {
    if (this.isReducedMotion) {
      this.typedName.nativeElement.textContent = 'Abdellah AAZDAG';
      this.typedSub.nativeElement.textContent = 'Architecte Logiciel • Ingénieur IA • Cloud & DevOps';
    } else {
      this.typedSubInstance = new Typed(this.typedSub.nativeElement, {
        strings: [
          'Architecte Logiciel Full-Stack',
          'Ingénieur en Solutions IA',
          'Expert Cloud &amp; DevOps',
          'Développeur Front (Angular &amp; React)'
        ],
        typeSpeed: 45,
        backSpeed: 28,
        loop: true,
        backDelay: 2200,
        startDelay: 350,
        showCursor: true,
        cursorChar: '|',
        smartBackspace: true,
        autoInsertCss: true
      });
    }

    this.createParticles();
  }

  ngOnDestroy(): void {
    if (this.typedNameInstance && typeof this.typedNameInstance.destroy === 'function') {
      this.typedNameInstance.destroy();
    }
    if (this.typedSubInstance && typeof this.typedSubInstance.destroy === 'function') {
      this.typedSubInstance.destroy();
    }
    if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }

    this.animationFrameId = requestAnimationFrame(() => {
      this.updateCardTilt(event);
    });
  }

  private updateCardTilt(event: MouseEvent): void {
    if (!this.glassCard || this.isReducedMotion) return;
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return;

    const rect = this.glassCard.nativeElement.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const rotateX = (y - 0.5) * -6;
    const rotateY = (x - 0.5) * 6;
    const translateZ = 10;

    this.renderer.setStyle(this.glassCard.nativeElement, 'transform', `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`);

    const glowX = Math.round((x - 0.5) * 40);
    const glowY = Math.round((y - 0.5) * 40);

    this.renderer.setStyle(this.glassCard.nativeElement, 'boxShadow', `0 12px 48px rgba(0,0,0,0.45), inset ${glowX}px ${glowY}px 60px rgba(0,224,255,0.03)`);
  }

  @HostListener('document:mouseleave')
  onMouseLeave() {
    if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
    }
    if (!this.glassCard) return;
    this.renderer.setStyle(this.glassCard.nativeElement, 'transform', `perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)`);
    this.renderer.setStyle(this.glassCard.nativeElement, 'boxShadow', `0 12px 48px rgba(0,0,0,0.45), inset 0 0 28px rgba(0,224,255,0.02)`);
  }

  private createParticles() {
    if (this.isReducedMotion) return;
    const container = this.particles?.nativeElement;
    if (!container) return;

    while (container.firstChild) container.removeChild(container.firstChild);

    for (let i = 0; i < 10; i++) {
      const p = this.renderer.createElement('div');
      this.renderer.addClass(p, 'particle');

      const size = Math.floor(Math.random() * 8) + 3;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const delay = Math.random() * 8;
      const alpha = (0.06 + Math.random() * 0.26).toFixed(2);
      const g = 180 + Math.floor(Math.random() * 75);

      this.renderer.setStyle(p, 'width', `${size}px`);
      this.renderer.setStyle(p, 'height', `${size}px`);
      this.renderer.setStyle(p, 'left', `${left}%`);
      this.renderer.setStyle(p, 'top', `${top}%`);
      this.renderer.setStyle(p, 'position', 'absolute');
      this.renderer.setStyle(p, 'borderRadius', '50%');
      this.renderer.setStyle(p, 'background', `rgba(0, ${g}, 255, ${alpha})`);
      this.renderer.setStyle(p, 'animation', `float-particle ${8 + Math.random() * 12}s linear infinite`);
      this.renderer.setStyle(p, 'animationDelay', `${delay}s`);
      this.renderer.appendChild(container, p);
    }
  }
}