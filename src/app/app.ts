import { Component, signal } from '@angular/core';
import {  NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [  RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('challenge_centre');
    showFloatingIcons = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // تخفي في أي route فيه /admin/
      this.showFloatingIcons = !event.urlAfterRedirects.startsWith('/admin');
    });
  }
}
