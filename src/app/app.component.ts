import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title: string = 'Contador App';
  numero: number = 0;

  acumular(valor: number) {
    this.numero += valor;
  }
}
