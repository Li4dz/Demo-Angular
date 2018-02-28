import { Component } from '@angular/core';
import { Hero } from "./shared/hero.class";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  heroes:Hero[] = [
    { id : 1, nombre : "Heroe #1", color : "green"},
    { id : 2, nombre : "Heroe #2", color : "red"},
    { id : 3, nombre : "Heroe #3", color : "blue"},
    { id : 4, nombre : "Heroe #4", color : "yellow"},
    { id : 5, nombre : "Heroe #5", color : "black"}
  ];

  heroe:Hero = new Hero();

  flagCambiarColor : boolean;

  agregarHeroe(){
    var lastId = this.heroes[this.heroes.length - 1].id
    this.heroe.id = lastId + 1;
    this.heroes.push(this.heroe);
  }

  cambiarColor(){
    this.flagCambiarColor = !this.flagCambiarColor;
  }


}
