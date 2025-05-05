import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  faPhone 
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

  // Données du formulaire
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  showSuccessMessage = false;

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
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
    
    // Masquer le message après 5 secondes
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 5000);
  }

  private handleError(error: any) {
    console.error('Erreur lors de l\'envoi:', error);
    this.isSubmitting = false;
    alert('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer plus tard.');
  }

  private resetForm() {
    this.formData = { 
      name: '', 
      email: '', 
      subject: '', 
      message: '' 
    };
  }
}