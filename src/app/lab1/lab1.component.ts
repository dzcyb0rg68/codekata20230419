import { Component } from '@angular/core';

@Component({
  selector: 'app-lab1',
  templateUrl: './lab1.component.html',
  styleUrls: ['./lab1.component.css'],
})
export class Lab1Component {
  continents: Record<string, unknown>[] = [
    { id: 1, continent: 'Africa' },
    { id: 2, continent: 'North America' },
    { id: 3, continent: 'South America' },
    { id: 4, continent: 'Asia' },
    { id: 5, continent: 'Australia' },
    { id: 6, continent: 'Antarctica' },
    { id: 7, continent: 'Europe' },
  ];
  selectedContinent = '';
}
