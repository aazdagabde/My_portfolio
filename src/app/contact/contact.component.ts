import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faSpinner, 
  faCheckCircle, 
  faTimes, 
  faUser, 
  faEnvelope, 
  faTag, 
  faCommentAlt, 
  faPaperPlane, 
  faPhone,
  faCircleExclamation
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, FontAwesomeModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // Icônes
  faSpinner = faSpinner;
  faCheckCircle = faCheckCircle;
  faTimes = faTimes;
  faUser = faUser;
  faEnvelope = faEnvelope;
  faTag = faTag;
  faCommentAlt = faCommentAlt;
  faPaperPlane = faPaperPlane;
  faPhone = faPhone;
  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;
  faCircleExclamation = faCircleExclamation;

  // Données du formulaire
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  showSuccessMessage = false;
  showConfirmationModal = false;
  showErrorMessage = false;
  errorMessage = '';
  fieldErrors: { [key: string]: string } = {};

  constructor(private http: HttpClient) {}

  validateEmail(email: string): boolean {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }

  validateField(field: string, value: string, model: NgModel) {
    if (field === 'email' && value && !this.validateEmail(value)) {
      this.fieldErrors[field] = 'Veuillez entrer une adresse email valide';
      model.control.setErrors({ 'invalid': true });
    } else if (field === 'name' && value && value.length < 2) {
      this.fieldErrors[field] = 'Le nom doit contenir au moins 2 caractères';
      model.control.setErrors({ 'invalid': true });
    } else if (field === 'message' && value && value.length < 10) {
      this.fieldErrors[field] = 'Le message doit contenir au moins 10 caractères';
      model.control.setErrors({ 'invalid': true });
    } else {
      delete this.fieldErrors[field];
      if (model.control.hasError('invalid')) {
        model.control.setErrors(null);
      }
    }
  }

  openConfirmationModal(contactForm: NgForm) {
    if (!contactForm.valid) {
      this.showErrorMessage = true;
      this.errorMessage = 'Veuillez remplir tous les champs obligatoires correctement';
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
        next: () => {
          this.handleSuccess();
        },
        error: (error) => {
          this.handleError(error);
        }
      });
  }

  private handleSuccess() {
    this.isSubmitting = false;
    this.showSuccessMessage = true;
    this.resetForm();
    
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 5000);
  }

  private handleError(error: any) {
    console.error('Erreur lors de l\'envoi:', error);
    this.isSubmitting = false;
    this.showErrorMessage = true;
    this.errorMessage = error.status === 0 
      ? 'Erreur de connexion. Vérifiez votre connexion internet.' 
      : 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer plus tard.';
    
    setTimeout(() => this.showErrorMessage = false, 5000);
  }

  private resetForm() {
    this.formData = { 
      name: '', 
      email: '', 
      subject: '', 
      message: '' 
    };
    this.fieldErrors = {};
  }
}