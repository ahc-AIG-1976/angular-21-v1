import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  imports: [FormsModule],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test {
  idenet ="Esta variable esta en el componente test";
  videojuegos: string[]=[];
  nuevoJuego: string = "";

  addJuego() {
    if(this.nuevoJuego && this.nuevoJuego.trim()) {
      this.videojuegos.push(this.nuevoJuego.trim());
      this.nuevoJuego ="";
    }
  }
}
