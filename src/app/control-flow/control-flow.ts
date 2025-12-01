import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

interface Slide {
  title: string;
  subtitle?: string;
  content: string;
  image?: string; // Ruta de la imagen para la diapositiva
}

@Component({
  selector: 'app-control-flow',
  imports: [CommonModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
 slides: Slide[] = [
    {
      title: '🔀 Control Flow: Lógica en tu HTML',
      subtitle: '',
      content: '',
      image: 'assets/s9.jpg' 
    },
    {
      title: '🔀 Control Flow: Lógica en tu HTML',
      subtitle: '',
      content: '',
      image: 'assets/s10.jpg' 
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
