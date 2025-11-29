// app.routes.ts
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Instalacion } from './instalacion/instalacion';
import { Componentes } from './componentes/componentes';
import { ControlFlow } from './control-flow/control-flow';

export const routes: Routes = [
  { path: '', component: Home },  // Ruta por defecto: Inicio
  { path: 'instalacion', component: Instalacion },
  { path: 'componentes', component: Componentes },
  { path: 'control-flow', component: ControlFlow },
  { path: '**', redirectTo: '' }  // Cualquier ruta no encontrada → Inicio
];