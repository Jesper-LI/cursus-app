import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
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
  cities: City[] = [];
  cities$!:Observable<City[]>;
  showCities: Boolean = true;
  toggleMsg = 'Verberg lijst met steden';
  nlText = {
    t1: 'Verberg lijst met steden',
    t2: 'Toon lijst met steden LNG'
  }
  currentCity: City = new City(0, '', '');

  constructor(private cityService: CityService) {

  }

  ngOnInit(): void {
    // this.cityService.getCities().subscribe(cityArray => this.cities = cityArray);
    this.cities$ = this.cityService.getCities();
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
  addCity(cityName: string, cityPhotoUrl: string, provinceIndex: number) {
    this.cityService.addCity(cityName, cityPhotoUrl, provinceIndex);
  }

  getProvinces() {
    return this.cityService.getProvinces();
  }
}
