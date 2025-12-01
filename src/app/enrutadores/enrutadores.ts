import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

interface Slide {
  title: string;
  subtitle?: string;
  content: string;
  image?: string; // Ruta de la imagen para la diapositiva
}

@Component({
  selector: 'app-enrutadores',
  imports: [CommonModule],
  templateUrl: './enrutadores.html',
  styleUrl: './enrutadores.css',
})
export class Enrutadores {
 slides: Slide[] = [
    {
      title: '🚀 Enrutadores',
      subtitle: '',
      content: '',
      image: '/assets/s11.jpg' 
    },
    {
      title: '🚀 Enrutadores',
      subtitle: '',
      content: '',
      image: 'assets/s12.jpg' 
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
