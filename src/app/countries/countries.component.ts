import { AppState } from './../reducers/index';
import { Component, OnInit } from '@angular/core';
import { CountriesService } from './countries.service';
import { Country, RegionList } from '../models/country.model';
import { Store } from '@ngrx/store';
import { selectedCountries } from './countries.actions';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  regionList: RegionList[] = [{
    name: 'Asia',
    value: 'asia'
  },
  {
    name: 'Europe',
    value: 'europe'
  }];
  selectedCountryList: Country[];

  constructor(
    private countriesService: CountriesService,
    public store: Store<AppState>
    ) {}

  ngOnInit(): void {
  }

  regionDropDownChange(event) {
    this.countriesService.getCountriesData(event.value)
    .subscribe((val: Country[]) => {
      this.selectedCountryList = val;
    });
  }

  countryDropDownChange(event) {
    const selectedCountry = this.selectedCountryList.filter(country => country.name === event.value);
    this.store.dispatch(selectedCountries({selectedCountryList: selectedCountry}));
  }

}
