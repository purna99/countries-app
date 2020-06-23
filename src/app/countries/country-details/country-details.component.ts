import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { Country } from 'src/app/models/country.model';

@Component({
    selector: 'app-country-details',
    templateUrl: './country-details.component.html',
    styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

    selectedCountriesList: Country[];

    constructor(private store: Store<AppState>) { }

    ngOnInit(): void {
        this.store.subscribe((val) => {
            // tslint:disable-next-line: no-string-literal
            this.selectedCountriesList = val['countries'].selectedCountryList;
        });
    }

}
