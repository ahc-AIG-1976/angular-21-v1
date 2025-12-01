import { Component } from '@angular/core';

@Component({
  selector: 'app-descargas',
  imports: [],
  templateUrl: './descargas.html',
  styleUrl: './descargas.css',
})
export class Descargas {
  descargar(tipo: string) {
    let archivo = '';
    let nombreDescarga = '';

    // 1. Configuramos qué archivo descargar
    if (tipo === 'video') {
      archivo = 'assets/video-tutorial.mp4'; // <--- RUTA EN ASSETS
      nombreDescarga = 'Video-Tutorial-Angular.mp4';
    } else if (tipo === 'pdf') {
      archivo = 'assets/tutorial-angular.pdf';         // <--- RUTA EN ASSETS
      nombreDescarga = 'Tutorial-Angular.pdf';
    }

    // 2. Lógica para forzar la descarga
    const link = document.createElement('a');
    link.href = archivo;
    link.download = nombreDescarga; // Esto sugiere el nombre al guardar
    link.target = '_blank';
    link.click();
    
    // (Opcional) Limpieza
    link.remove();
  }
}
