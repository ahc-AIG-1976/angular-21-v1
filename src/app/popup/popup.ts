import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  imports: [],
  templateUrl: './popup.html',
  styleUrl: './popup.css',
})
export class Popup {
  // Evento para avisar al padre que cierre el popup
  @Output() close = new EventEmitter<void>();

  // Estado interno de la votación
  voteState: 'inicio' | 'like' | 'dislike' = 'inicio';

  votar(tipo: 'like' | 'dislike') {
    this.voteState = tipo;
  }

  cerrar() {
    this.close.emit(); // Emite el evento al padre
  }
}
