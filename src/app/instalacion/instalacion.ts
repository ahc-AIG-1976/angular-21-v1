import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

interface Slide {
  title: string;
  subtitle?: string;
  content: string;
  image?: string; 
}

@Component({
  selector: 'app-instalacion',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './instalacion.html',
  styleUrl: './instalacion.css',
})
export class Instalacion {
slides: Slide[] = [
    {
      title: '🚀 ¿Qué es Angular?',
      subtitle: '',
      content: '',
      image: '/assets/s1.jpg' 
    },
    {
      title: '📦 Instalación y Setup',
      subtitle: '',
      content: '',
      image: 'assets/s2.jpg' 
    },
    {
      title: '🧱 Componentes: Los Bloques del Edificio',
      subtitle: 'Todo en Angular se construye con Componentes',
      content: '',
      image: 'assets/s3.jpg' 
    },
    {
      title: '🔀 Control Flow: Lógica en tu HTML',
      subtitle: '',
      content: '',
      image: 'assets/s4.jpg' 
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
