import { Component, computed, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

type Lang = 'en' | 'es';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  menuOpen = false;

  // Idioma (por defecto EN)
  lang = signal<Lang>((localStorage.getItem('lang') as Lang) || 'en');

  // Diccionario simple SOLO para el navbar
  private dict: Record<Lang, Record<string, string>> = {
    en: {
      home: 'Home',
      about: 'About me',
      projects: 'Projects',
      clients: 'Clients',
      cv: 'Curriculum Vitae',
      contact: 'Contact me',
    },
    es: {
      home: 'Inicio',
      about: 'Sobre mí',
      projects: 'Proyectos',
      clients: 'Clientes',
      cv: 'Hoja de vida',
      contact: 'Contáctame',
    },
  };

  // Textos listos para usar en el template
  t = computed(() => this.dict[this.lang()]);

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  setLang(newLang: Lang) {
    this.lang.set(newLang);
    localStorage.setItem('lang', newLang);
  }
}