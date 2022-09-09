import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Goku', 'Vegeta', 'Bills', 'Gohan', 'Krillin'];
  hero: string = '';

  borrarHeroe(){
    this.hero = this.heroes.shift() || '';
    console.log(this.hero);
  }

}

