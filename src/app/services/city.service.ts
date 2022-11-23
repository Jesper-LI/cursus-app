import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//Oberservable stuff
import { tap, catchError } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
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

  getCitiesOLD(): Observable<City[]> {
    return this.http
      .get<City[]>('../assets/cities.json')
      .pipe(tap(result => console.log(`Dit komt binnen als Observable : ${result}`)
      ))
  }
  getCities() : Observable<City[]> {
    return this.http.get<City[]>(this.url).pipe(
      tap(result => console.log('via json-server: ',result)),
      catchError(err => {
        console.log('Kaput ser niet lopen niet');
        return throwError(() => new Error(err)); //Breaks?
      })
    );
  }

  getCityOLD(id: number) {
    return this.cities.find(c => c.id === id);
  }
  //Retourneer City op basis van id
  getCity(id:number) : Observable<City> {
    return this.http.get<City>(`${this.url}/${id}`);
  }



  deleteCity(city:City): void{
    this.http.delete<City>(`${this.url}/${city.id}`);
  }

  getProvinces() {
    return this.province;
  }


  // addCity(cityName: string, cityPhotoUrl: string, provinceIndex: number) {
  //   let addedCity = new City(
  //     this.cities.length + 1,
  //     cityName,
  //     Object.entries(this.province).find(provinceEntry => Number(provinceEntry[0]) == provinceIndex)?.[1],
  //     cityPhotoUrl);
  //   this.cities.push(addedCity);
  // }

  addCity(newCity:City):Observable<City> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.post(this.url, newCity, {headers: headers}) as Observable<City>;
  }


}
