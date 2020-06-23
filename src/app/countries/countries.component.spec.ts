import { CountryDetailsComponent } from './country-details/country-details.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CountriesService } from './countries.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesComponent } from './countries.component';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, of as observableOf } from 'rxjs';

class MockCountriesService {
    getCountriesData() {
        return observableOf([]);
    }
}

describe('CountriesComponent', () => {
  let component: CountriesComponent;
  let fixture: ComponentFixture<CountriesComponent>;
  let countriesService;
  const initialState = {
    countries: {
        selectedCountryList: [{ name: 'India', topLevelDomain: ['.in'], alpha2Code: 'IN', alpha3Code: 'IND', 
        callingCodes: ['91'], capital: 'New Delhi', altSpellings: ['IN', 'Bhārat', 'Republic of India', 'Bharat Ganrajya'], 
        region: 'Asia', subregion: 'Southern Asia', population: 1295210000, latlng: [20, 77], demonym: 'Indian', 
        area: 3287590, gini: 33.4, timezones: ['UTC+05:30'], borders: ['AFG', 'BGD', 'BTN', 'MMR', 'CHN', 'NPL', 'PAK', 'LKA'],
         nativeName: 'भारत', numericCode: '356', currencies: [{ code: 'INR', name: 'Indian rupee', symbol: '₹' }], 
         languages: [{ iso639_1: 'hi', iso639_2: 'hin', name: 'Hindi', nativeName: 'हिन्दी' }, { iso639_1: 'en', 
         iso639_2: 'eng', name: 'English', nativeName: 'English' }], translations: { de: 'Indien', es: 'India', 
         fr: 'Inde', ja: 'インド', it: 'India', br: 'Índia', pt: 'Índia', nl: 'India', hr: 'Indija', fa: 'هند' }, 
         flag: 'https://restcountries.eu/data/ind.svg', regionalBlocs: [{ acronym: 'SAARC', 
         name: 'South Asian Association for Regional Cooperation', otherAcronyms: [], otherNames: [] }], cioc: 'IND' }]
    }
  };
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ CountriesComponent, DropdownComponent, CountryDetailsComponent ],
      providers: [
        provideMockStore({ initialState }),
        {provide: CountriesService, useClass: MockCountriesService}
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesComponent);
    component = fixture.componentInstance;
    countriesService = TestBed.inject(CountriesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('regionDropDownChange() should call getCountriesData() with event.value and update selectedCountryList', () => {
    spyOn(countriesService, 'getCountriesData').and.callThrough();
    component.regionDropDownChange({value: 'test'});
    expect(countriesService.getCountriesData).toHaveBeenCalledWith('test');
    expect(component.selectedCountryList).toEqual([]);
  });

  it('should create', () => {
      const selectedCountryList = [];
      selectedCountryList.push(initialState.countries);
      component.selectedCountryList = selectedCountryList;
      spyOn(component.store, 'dispatch').and.callThrough();
      component.countryDropDownChange({value: 'India'});
      expect(component.store.dispatch).toHaveBeenCalled();
  });
});
