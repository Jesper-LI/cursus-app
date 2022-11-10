import { Component, OnInit } from '@angular/core';
import { City } from "./city";
import { CityService } from './services/city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welkom dit is een angular Cursus';
  name = 'Henkus Dingus';
  cities:City[] = [];
  showCities:Boolean = true;
  toggleMsg = 'Verberg lijst met steden';
  nlText= {
    t1 : 'Verberg lijst met steden',
    t2 :'Toon lijst met steden LNG'
  }
  currentCity: City = new City(0,'','');

  constructor(private cityService : CityService) {

  }

  ngOnInit(): void {
    this.cities = this.cityService.getCities();
  }

  toggleCities(event: Event) {
    let input = event.target as HTMLInputElement;
    console.log(input.value);
    this.showCities = !this.showCities;
  }

  showCity(city: City) {
    this.currentCity = city;
    // alert(`Uw favoriete stad is ${this.currentCity.name}`);
  }
  addCity(cityName: string) {
    let addedCity = new City(this.cities.length+1, cityName, 'onbekend');
    this.cities.push(addedCity);
  }
}
