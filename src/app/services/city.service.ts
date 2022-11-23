import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//Oberservable stuff
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
// import { of } from 'rxjs/operators';
import { City } from '../city';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  url= 'http://localhost:3000/cities';
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
  getCitiesJsonServer() : Observable<City[]> {
    return this.http.get<City[]>(this.url).pipe(
      tap(result => console.log('via json-server: ',result))//,
      // catchError(err => {
      //   console.log('Kaput ser niet lopen niet');
      //   return of(err); //Breaks?
      // })
    );
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
