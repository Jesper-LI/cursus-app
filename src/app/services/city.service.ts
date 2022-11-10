import { Injectable } from '@angular/core';
import { City } from '../city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private cities: City[] = [
    new City(1, 'Groningen', 'GR', "https://www.27vakantiedagen.nl/wp-content/uploads/2021/02/groningen-stad.jpg"),
    new City(2, 'Hengelo', 'OV', "https://hengelo.nu/wp-content/uploads/2021/09/Enschedesestraat-Hengelo-4.jpg"),
    new City(3, 'Den Haag', 'ZH', "https://www.reisroutes.be/userfiles/fotos/skyline-van-den-haag-nederland_28879_xl.jpg"),
    new City(4, 'Assen', 'DR', "https://www.holland.com/upload_mm/2/0/c/78014_fullimage_people%20enjoying%20the%20spring%20weather%20at%20restaurants%20in%20assen%20%C2%A9%20marc%20venema%20via%20shutterstock.jpg"),
  ];

  private province = {
    1: 'GR',
    2: 'OV',
    3: 'DR',
    4: 'ZH',
    5: 'NH',
    6: 'UT',
    7: 'LI',
    8: 'NB',
    9: 'GE',
    10: 'ZE',
    11: 'FL',
    12: 'FR'
  };

  constructor() { }

  getCities() {
    return this.cities
  }

  getCity(id: number) {
    return this.cities.find(c => c.id === id);
  }

  getProvinces() {
    return this.province;
  }


  addCity(cityName: string, cityPhotoUrl: string, provinceIndex: number) {
    let addedCity = new City(
      this.cities.length + 1,
      cityName,
      Object.entries(this.province).find(provinceEntry => Number(provinceEntry[0]) == provinceIndex)?.[1],
      cityPhotoUrl);
    this.cities.push(addedCity);
  }

}
