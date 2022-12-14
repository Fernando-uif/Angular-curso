import { Component } from '@angular/core';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  nombre: string = 'iron man';
  edad: number = 10;
  get nombreCapitzalizado(): string {
    return this.nombre.toUpperCase();
  }
  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }
  cambiarNombre(): void {
    this.nombre = 'Spiderman';

  }
  cambiarEdad():void{
    this.edad = 30;
  }
}
