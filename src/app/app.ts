import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import { ContactComponent } from "./features/home_page/contact/contact.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { StatsComponent } from './features/home_page/stats/stats.component';
import { AboutComponent } from './features/home_page/about/about.component';
import { HeroComponent } from './features/home_page/hero/hero.component';
import { ServicesComponent } from './features/home_page/services/services.component';

@Component({
  selector: 'app-root',
  imports: [ HeaderComponent, ContactComponent, FooterComponent,StatsComponent,
    AboutComponent,HeroComponent,ServicesComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('challenge_centre');
}
