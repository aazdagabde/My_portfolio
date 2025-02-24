// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    // On "fournit" le routeur grâce à appRoutes
    provideRouter(appRoutes),
  ]
}).catch(err => console.error(err));
