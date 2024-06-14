import { Component } from '@angular/core';

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrl: './firstcomponent.component.css'
})
export class FirstcomponentComponent {

  hero = {
    name: '',
    power: '',
    moves: '',
    image: '',
  }
  heros:any[]= [];

  ajouter(){
    this.heros.push(this.hero);
    this.hero = {
      name: '',
      power: '',
      moves: '',
      image: '',
    }

    console.log(this.heros);
  }
}
