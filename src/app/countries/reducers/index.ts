import { Country } from './../../models/country.model';
import {
  createReducer,
  on
} from '@ngrx/store';
import { selectedCountries } from '../countries.actions';

export const countriesFeatureKey = 'countries';

export interface CountriesModuleState {
    selectedCountryList: Country[];
}

export const intialCountriesModuleState: CountriesModuleState = {
    selectedCountryList: []
};

export const countriesReducer = createReducer(

    intialCountriesModuleState,

    on(selectedCountries, (state, action) => {
        return {
            selectedCountryList: action.selectedCountryList
        };
    }),

);


