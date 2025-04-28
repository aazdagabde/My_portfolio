import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, HttpClientModule], // 👈 HttpClientModule à ajouter obligatoirement
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    const urlapi = 'https://aazdagpf.onrender.com'+ '/api/contact/send'; // Utilisation de l'URL de l'environnement
    this.http.post(urlapi, this.formData, { responseType: 'text' })
      .subscribe({
        next: (response) => {
          alert(response);
          this.formData = { name: '', email: '', subject: '', message: '' };
        },
        error: (error) => {
          console.error('Erreur :', error);
          alert('Erreur lors de l\'envoi du message');
        }
      });
  }
}
