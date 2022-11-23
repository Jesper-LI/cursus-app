import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, EMPTY } from 'rxjs';
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
  currentCity$!:Observable<City>;

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
    // this.currentCity = this.cityService.getCity(city.id)
    // alert(`Uw favoriete stad is ${this.currentCity.name}`);
  }
  getCity(id:number) {
    //Todo
    console.log(id);
    this.currentCity$ = this.cityService.getCity(id);
    
  }
  //OLD
  // addCity(cityName: string, cityPhotoUrl: string, provinceIndex: number) {
  //   this.cityService.addCity(cityName, cityPhotoUrl, provinceIndex);
  // }
  addCity(cityName: string, cityPhotoUrl: string, provinceIndex: number) {
    const newCity = new City(NaN,cityName, provinceIndex.toString(), cityPhotoUrl);
    this.cityService.addCity(newCity).subscribe((addedCity) => {
      //Cities opnieuw ophalen in de subscription
      this.cities$ = this.cityService.getCities();
    });
  }
  clear() {
    this.currentCity$ = EMPTY //Not sure if this is OK
  }

  deleteCity(city:City){
    this.cityService.deleteCity(city).;
  }
  getProvinces() {
    return this.cityService.getProvinces();
  }
}
