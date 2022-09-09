import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <h3>La base es : {{ base }}</h3>

    <button (click)="accumulate(base)">+{{ base }}</button>
    <span>{{ number }}</span>
    <button (click)="accumulate(-base)">-{{ base }}</button>
  `,
})
export class ContadorComponent {
  title: string = 'Contador App';
  number: number = 0;
  base: number = 5;

  accumulate(value: number) {
    this.number += value;
  }
}
