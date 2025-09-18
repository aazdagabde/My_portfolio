import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { CursorHaloDirective } from './directives/cursor-halo.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,CursorHaloDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'portfolio';
  isNavOpen: boolean = false;

  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }
}

