import { HttpClientModule } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController
  } from '@angular/common/http/testing';

import { CountriesService } from './countries.service';

describe('CountriesService', () => {
  let service: CountriesService;
  let backend;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientModule, HttpClientTestingModule]
    });
    service = TestBed.inject(CountriesService);
    backend = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCountriesData() should make GET call', async(() => {
    service.getCountriesData('asia').subscribe(data => {});
    const req = backend.expectOne('https://restcountries.eu/rest/v2/region/asia');
    expect(req.request.method).toEqual('GET');
    req.flush(123);
    backend.verify();
  }));
});
