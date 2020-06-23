import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailsComponent } from './country-details.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('CountryDetailsComponent', () => {
  let component: CountryDetailsComponent;
  let fixture: ComponentFixture<CountryDetailsComponent>;

  beforeEach(async(() => {

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

    TestBed.configureTestingModule({
      declarations: [ CountryDetailsComponent ],
      providers: [
        provideMockStore({ initialState })
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit( ) should get the selectedCountryList from store', () => {
    component.ngOnInit();
    expect(component.selectedCountriesList.length).toEqual(1);
    expect(component.selectedCountriesList[0].name).toEqual('India');
  });
});
