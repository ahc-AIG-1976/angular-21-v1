import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test } from "./test/test";
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Carrusel } from './carrusel/carrusel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Test, Header, Footer, Carrusel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-21-v1');
  idenet = "Esta Variable esta en el tapiz principal app";
}
