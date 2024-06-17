import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrl: './ajout.component.css'
})
export class AjoutComponent {
  hero = {
    name: '',
    power: '',
    moves: '',
    image: '',
  }

  ajouter(){
    this._shared.heros.push(this.hero);
    this.hero = {
      name: '',
      power: '',
      moves: '',
      image: '',
    }
}
constructor(public _shared: SharedService ) {}

}
