import { Component, AfterViewInit, ElementRef, ViewChild, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faSpinner, faCheckCircle, faTimes, faUser, faEnvelope, faTag, faCommentAlt, 
  faPaperPlane, faPhone, faCircleExclamation
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, FontAwesomeModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('particles', { static: true }) particles!: ElementRef<HTMLElement>;
  private isReducedMotion = false;

  // Icônes
  faSpinner = faSpinner; faCheckCircle = faCheckCircle; faTimes = faTimes; faUser = faUser;
  faEnvelope = faEnvelope; faTag = faTag; faCommentAlt = faCommentAlt; faPaperPlane = faPaperPlane;
  faPhone = faPhone; faGithub = faGithub; faLinkedinIn = faLinkedinIn; faCircleExclamation = faCircleExclamation;

  // États du formulaire et des modales
  formData = { name: '', email: '', subject: '', message: '' };
  isSubmitting = false;
  showSuccessMessage = false;
  showErrorMessage = false;
  errorMessage = '';
  showConfirmationModal = false;
  fieldErrors: { [key: string]: string } = {};

  constructor(private http: HttpClient, private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId) && typeof window !== 'undefined') {
      this.isReducedMotion = !!window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
  }

  ngAfterViewInit(): void {
    this.createParticles();
  }

  // Logique du formulaire (inchangée)
  validateField(fieldName: string, value: string, control: any) {
    if (control.invalid && (control.dirty || control.touched)) {
      if (control.errors?.['required']) {
        this.fieldErrors[fieldName] = 'Ce champ est requis.';
      } else if (control.errors?.['email']) {
        this.fieldErrors[fieldName] = 'Veuillez entrer une adresse email valide.';
      }
    } else {
      delete this.fieldErrors[fieldName];
    }
  }

  confirmSend(contactForm: NgForm) {
    if (contactForm.invalid) {
      Object.keys(contactForm.controls).forEach(field => {
        const control = contactForm.controls[field];
        control.markAsTouched({ onlySelf: true });
        this.validateField(field, control.value, control);
      });
      this.errorMessage = "Veuillez corriger les erreurs dans le formulaire avant de continuer.";
      this.showErrorMessage = true;
      setTimeout(() => this.showErrorMessage = false, 5000);
      return;
    }
    this.showConfirmationModal = true;
  }

  closeConfirmationModal() {
    this.showConfirmationModal = false;
  }

  onSubmit(contactForm: NgForm) {
    if (this.isSubmitting || !contactForm.valid) return;
    this.isSubmitting = true;
    this.showConfirmationModal = false;
    const apiUrl = 'https://mso.pythonanywhere.com/send-email/';
    this.http.post(apiUrl, this.formData, { responseType: 'text' })
      .subscribe({
        next: () => this.handleSuccess(contactForm),
        error: (error) => this.handleError(error)
      });
  }

  private handleSuccess(contactForm: NgForm) {
    this.isSubmitting = false;
    this.showSuccessMessage = true;
    contactForm.resetForm();
    this.formData = { name: '', email: '', subject: '', message: '' };
    setTimeout(() => this.showSuccessMessage = false, 5000);
  }

  private handleError(error: any) {
    this.isSubmitting = false;
    this.showErrorMessage = true;
    this.errorMessage = error.status === 0 ? 'Erreur de connexion.' : 'Une erreur est survenue.';
    setTimeout(() => this.showErrorMessage = false, 5000);
  }

  // Fonction de création des particules
  private createParticles() {
    if (this.isReducedMotion) return;
    const container = this.particles?.nativeElement;
    if (!container) return;
    while (container.firstChild) container.removeChild(container.firstChild);
    for (let i = 0; i < 15; i++) {
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