import { Component } from '@angular/core';
import { TutorialSliderComponent } from '../tutorial-slider/tutorial-slider'; 

@Component({
  selector: 'app-home',
  imports: [TutorialSliderComponent], 
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
