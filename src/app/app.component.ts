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
  showCities:Boolean = true;
  toggleMsg = 'Verberg lijst met steden';
  nlText= {
    t1 : 'Verberg lijst met steden',
    t2 :'Toon lijst met steden LNG'
  }
  currentCity: City = new City(0,'','');

  constructor() {

  }

  ngOnInit(): void {
    this.cities = [
      new City(1, 'Groningen', 'GR', "https://www.27vakantiedagen.nl/wp-content/uploads/2021/02/groningen-stad.jpg"),
      new City(2, 'Hengelo', 'OV', "https://hengelo.nu/wp-content/uploads/2021/09/Enschedesestraat-Hengelo-4.jpg"),
      new City(3, 'Den Haag', 'ZH', "https://www.reisroutes.be/userfiles/fotos/skyline-van-den-haag-nederland_28879_xl.jpg"),
      new City(4, 'Assen', 'DR', "https://www.holland.com/upload_mm/2/0/c/78014_fullimage_people%20enjoying%20the%20spring%20weather%20at%20restaurants%20in%20assen%20%C2%A9%20marc%20venema%20via%20shutterstock.jpg"),
    ];
  }
  toggleCities(event: Event) {
    let input = event.target as HTMLInputElement;
    console.log(input.value);
    this.showCities = !this.showCities;
  }

  showCity(city: City) {
    this.currentCity = city;
    alert(`Uw favoriete stad is ${this.currentCity.name}`);
  }
  addCity(cityName: string) {
    let addedCity = new City(this.cities.length+1, cityName, 'onbekend');
    this.cities.push(addedCity);
  }
}
