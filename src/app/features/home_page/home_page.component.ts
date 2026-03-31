import { Component } from "@angular/core";
import { HeaderComponent } from "../../layout/header/header.component";
import { HeroComponent } from "./hero/hero.component";
import { AboutComponent } from "./about/about.component";
import { StatsComponent } from "./stats/stats.component";
import { ServicesComponent } from "./services/services.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "../../layout/footer/footer.component";
import { CtaBannerComponent } from "./cta-banner/cta-banner.component";
import { FaqComponent } from "./faq/faq.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent, HeroComponent, AboutComponent,
    ServicesComponent, StatsComponent, ContactComponent, FooterComponent,
    CtaBannerComponent,
    FaqComponent
],
  template: `
    <app-header></app-header>
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-services></app-services>
      <app-stats></app-stats>
       <app-faq></app-faq>
      <app-cta-banner></app-cta-banner>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `
})
export class HomePageComponent {}