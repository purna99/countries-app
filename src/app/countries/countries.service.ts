import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  getCountriesData(region: string) {
    return this.http.get('https://restcountries.eu/rest/v2/region/' + region);
  }

}
