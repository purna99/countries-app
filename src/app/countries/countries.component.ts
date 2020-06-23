import { Component, OnInit } from '@angular/core';
import { CountriesService } from './countries.service';
import { Country } from '../models/country.model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  regionList = [{
    name: 'Asia',
    value: 'asia'
  },
  {
    name: 'Europe',
    value: 'europe'
  }];
  selectedCountryList: Country[];

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
  }

  regionDropDownChange(event) {
    this.countriesService.getCountriesData(event.value)
    .subscribe((val: Country[]) => {
      this.selectedCountryList = val;
    });
  }

  countryDropDownChange(event) {
    console.log('country', event);
  }

}
