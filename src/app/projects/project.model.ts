// project.model.ts
export interface Project {
  name: string;
  description: string;
  technologies: string[];  // ex: ['Angular', 'Spring Boot']
  features: string[];      // liste des fonctionnalités clés
  repoLink?: string;       // lien GitHub
  demoLink?: string;       // lien démo en ligne
  screenshots: string[];   // chemins vers les captures
  thumbnail?: string;      // chemin vers l'image miniature
  completionDate: string; // date de réalisation (format: 'MM/YYYY')
  category?: string;       // catégorie optionnelle
}