import { Component, OnInit } from '@angular/core';

interface ContinentData {
  continentID: number;
  continentName: string;
}

interface CountryData {
  continentID: number;
  countryID: number;
  countryName: string;
}

@Component({
  selector: 'app-lab1',
  templateUrl: './lab1.component.html',
  styleUrls: ['./lab1.component.css'],
})
export class Lab1Component implements OnInit {
  allContinents: ContinentData[] = [];
  allCountries: CountryData[] = [];
  filteredCountryOptions: CountryData[] = [];
  selectedContinent: number;
  selectedCountry: number;

  ngOnInit(): void {
    this.getContinentData();
    this.getCountryData();
  }

  getContinentData() {
    this.allContinents = [
      { continentID: 1, continentName: 'Africa' },
      { continentID: 2, continentName: 'North America' },
      { continentID: 3, continentName: 'South America' },
      { continentID: 4, continentName: 'Asia' },
      { continentID: 5, continentName: 'Australia' },
      { continentID: 6, continentName: 'Antarctica' },
      { continentID: 7, continentName: 'Europe' },
    ];
  }

  getCountryData() {
    this.allCountries = [
      { continentID: 1, countryID: 1, countryName: 'Nigeria' },
      { continentID: 1, countryID: 2, countryName: 'Egypt' },
      { continentID: 1, countryID: 3, countryName: 'South Africa' },
      { continentID: 2, countryID: 1, countryName: 'United States' },
      { continentID: 2, countryID: 2, countryName: 'Canada' },
      { continentID: 2, countryID: 3, countryName: 'Mexico' },
      { continentID: 3, countryID: 1, countryName: 'Brazil' },
      { continentID: 3, countryID: 2, countryName: 'Argentina' },
      { continentID: 3, countryID: 3, countryName: 'Colombia' },
      { continentID: 4, countryID: 1, countryName: 'China' },
      { continentID: 4, countryID: 2, countryName: 'Singapore' },
      { continentID: 4, countryID: 3, countryName: 'Japan' },
      { continentID: 5, countryID: 1, countryName: 'Australia' },
      { continentID: 5, countryID: 2, countryName: 'New Zealand' },
      { continentID: 5, countryID: 3, countryName: 'Papua New Guinea' },
      { continentID: 7, countryID: 1, countryName: 'Slovakia' },
      { continentID: 7, countryID: 2, countryName: 'Germany' },
      { continentID: 7, countryID: 3, countryName: 'United Kingdom' },
    ];
    this.filteredCountryOptions = this.allCountries;
  }

  updateCountries() {
    console.log('selected continent ID: ', this.selectedContinent);

    // Your first challenge: filter the allCountries so it contains only the selectedContinent

    // Your second challenge: reset the selectedCountry
  }
}
