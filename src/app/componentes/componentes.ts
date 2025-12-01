import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Slide {
  title: string;
  subtitle?: string;
  content: string;
  image?: string; // Ruta de la imagen para la diapositiva
}

@Component({
  selector: 'app-componentes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componentes.html',
  styleUrl: './componentes.css',
})
export class Componentes {
 slides: Slide[] = [
       {
      title: '🧑‍💻 Despliegue Automatizado',
      subtitle: 'De Local a la Web en un Comando',
      content: 'Con `npm run deploy`, automatiza Git commits, el build de Angular y el despliegue en GitHub Pages. ¡Simplifica tu flujo de trabajo!',
      image: 'assets/s5.jpg' 
    },
    {
      title: '🚀 ¿Qué es Angular?',
      subtitle: 'El Framework para Aplicaciones Web Modernas',
      content: 'Angular es un framework de desarrollo de JavaScript, creado por Google, para construir Single Page Applications (SPA) dinámicas y reactivas.',
      image: '/assets/s6.jpg' 
    },
    {
      title: '📦 Instalación y Setup',
      subtitle: 'Tu Primeros Pasos con Angular CLI',
      content: 'Instala Angular CLI globalmente con `npm install -g @angular/cli`. Luego, crea tu proyecto con `ng new mi-app` y arráncalo con `ng serve`.',
      image: 'assets/s7.jpg' 
    },
    {
      title: '🧱 Componentes: Los Bloques del Edificio',
      subtitle: 'Todo en Angular se construye con Componentes',
      content: 'Un componente es una unidad independiente con su propia lógica (TS), vista (HTML) y estilo (CSS). ¡Son la base de tu UI!',
      image: 'assets/s8.jpg' 
    }
  ];

  currentSlideIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    // Puedes añadir lógica de inicialización aquí si es necesario
  }

  goToNextSlide(): void {
    if (this.currentSlideIndex < this.slides.length - 1) {
      this.currentSlideIndex++;
    } else {
      this.currentSlideIndex = 0; // Vuelve al inicio
    }
  }

  goToPreviousSlide(): void {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    } else {
      this.currentSlideIndex = this.slides.length - 1; // Vuelve al final
    }
  }

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
  }
}
