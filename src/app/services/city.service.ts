import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { City } from '../city';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  
  private cities: City[] = [
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

  constructor(private http: HttpClient) { }

  getCities(): Observable<City[]> {
    return this.http
      .get<City[]>('../assets/cities.json')
      .pipe(tap(result => console.log(`Dit komt binnen als Observable : ${result}`)
      ))
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
