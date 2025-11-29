import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para @if en versiones previas a Angular 17.2

interface Slide {
  title: string;
  subtitle?: string;
  content: string;
  image?: string; // Ruta de la imagen para la diapositiva
}

@Component({
  selector: 'app-tutorial-slider',
  standalone: true, // Si tu proyecto usa standalone components (lo más probable en Angular 21)
  imports: [CommonModule], // Importa CommonModule para Control Flow si es necesario (Angular < 17.2)
  templateUrl: './tutorial-slider.html',
  styleUrl: './tutorial-slider.css'
})
export class TutorialSliderComponent implements OnInit {
  slides: Slide[] = [
    {
      title: '🚀 ¿Qué es Angular?',
      subtitle: 'El Framework para Aplicaciones Web Modernas',
      content: 'Angular es un framework de desarrollo de JavaScript, creado por Google, para construir Single Page Applications (SPA) dinámicas y reactivas.',
      image: '/assets/s1.png' // Asegúrate de tener esta imagen en src/assets
    },
    {
      title: '📦 Instalación y Setup',
      subtitle: 'Tu Primeros Pasos con Angular CLI',
      content: 'Instala Angular CLI globalmente con `npm install -g @angular/cli`. Luego, crea tu proyecto con `ng new mi-app` y arráncalo con `ng serve`.',
      image: 'assets/s2.png' // Imagen de terminal/instalación
    },
    {
      title: '🧱 Componentes: Los Bloques del Edificio',
      subtitle: 'Todo en Angular se construye con Componentes',
      content: 'Un componente es una unidad independiente con su propia lógica (TS), vista (HTML) y estilo (CSS). ¡Son la base de tu UI!',
      image: 'assets/s3.png' // Imagen de bloques o estructura de carpetas
    },
    {
      title: '🔀 Control Flow: Lógica en tu HTML',
      subtitle: 'Gestiona la UI con `@if` y `@for`',
      content: 'La sintaxis moderna para condicionales y bucles. Usa `@if` para mostrar u ocultar elementos y `@for` para iterar listas de forma eficiente.',
      image: 'assets/s4.png' // Imagen de flechas o diagramas de flujo
    },
    {
      title: '🧑‍💻 Despliegue Automatizado',
      subtitle: 'De Local a la Web en un Comando',
      content: 'Con `npm run deploy`, automatiza Git commits, el build de Angular y el despliegue en GitHub Pages. ¡Simplifica tu flujo de trabajo!',
      image: 'assets/s5.png' // Imagen de GitHub o de un proceso automatizado
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