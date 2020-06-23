import { countriesReducer } from './reducers/index';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './countries.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { StoreModule } from '@ngrx/store';
import * as fromCountries from './reducers';
import { CountryDetailsComponent } from './country-details/country-details.component';


@NgModule({
  declarations: [CountriesComponent, DropdownComponent, CountryDetailsComponent],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    StoreModule.forFeature(fromCountries.countriesFeatureKey, countriesReducer)
  ]
})
export class CountriesModule { }
