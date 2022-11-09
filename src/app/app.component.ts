import { Component, OnInit } from '@angular/core';
import { City } from "./city";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welkom dit is een angular Cursus';
  name = 'Henkus Dingus';
  cities:City[] = [];
  showCities:Boolean = false;

  constructor() {

  }

  ngOnInit(): void {
    this.cities = [
      new City(1, 'Groningen', 'GR'),
      new City(2, 'Hengelo', 'OV'),
      new City(3, 'Den Haag', 'ZH'),
      new City(4, 'Assen', 'DR'),
    ];
    this.showCities = this.cities.length > 3;

  }
}
