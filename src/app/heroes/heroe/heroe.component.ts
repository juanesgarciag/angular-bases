import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})
export class HeroeComponent {
  nombre: string = 'Iron man';
  edad: number = 43;

  get nombreCapitalizado (): string{
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre} ${this.edad} años`;
  }

  cambiarNombre(): void {
    this.nombre = 'Ant man'
  }

  cambiarEdad(): void{
    this.edad = 35;
  }
}
