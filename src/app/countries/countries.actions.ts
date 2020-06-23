import { Country } from './../models/country.model';
import { createAction, props } from '@ngrx/store';

export const selectedCountries = createAction(
    'Countries list to displayed',
    props<{selectedCountryList: Country[]}>()
);
