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
      title: '🧱 Componentes: Los Bloques del Edificio',
      subtitle: '',
      content: '',
      image: 'assets/s5.jpg' 
    },
    {
      title: '🧱 Componentes: Los Bloques del Edificio',
      subtitle: '',
      content: '',
      image: '/assets/s6.jpg' 
    },
    {
      title: '🧱 Componentes: Los Bloques del Edificio',
      subtitle: '',
      content: '',
      image: 'assets/s7.jpg' 
    },
    {
      title: '🧱 Componentes: Los Bloques del Edificio',
      subtitle: '',
      content: '',
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
