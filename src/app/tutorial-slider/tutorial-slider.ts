import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-tutorial-slider',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './tutorial-slider.html',
  styleUrl: './tutorial-slider.css'
})
export class TutorialSliderComponent {
  // Ruta al archivo en tu carpeta assets
  videoSrc = 'assets/video-tutorial.mp4';
}