import { Component, OnInit } from '@angular/core';
import { GridOptions, ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-lab3',
  templateUrl: './lab3.component.html',
  styleUrls: ['./lab3.component.css'],
})
export class Lab3Component implements OnInit {
  tableData: {
    continentID: number;
    continentName: string;
    countryID: number;
    countryName: string;
    population: number;
  }[] = [];
  columnDefs: ColDef[] = [
    { field: 'continentName', headerName: 'Continent Name' },
    { field: 'countryName', headerName: 'Country Name' },
    { field: 'population', headerName: 'Population' },
  ];

  avgTableData: any[] = [];
  avgColumnDefs: ColDef[] = [
    { field: 'continentName', headerName: 'Continent Name' },
    { field: 'averagePopulation', headerName: 'Average Population' },
  ];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 150,
  };

  constructor() {}

  ngOnInit(): void {
    this.getTableData();
    this.calculateAveragePopulation();
  }

  getTableData() {
    this.tableData = [
      {
        continentID: 1,
        continentName: 'Africa',
        countryID: 1,
        countryName: 'Nigeria',
        population: 200000000,
      },
      {
        continentID: 1,
        continentName: 'Africa',
        countryID: 2,
        countryName: 'Egypt',
        population: 100000000,
      },
      {
        continentID: 1,
        continentName: 'Africa',
        countryID: 3,
        countryName: 'South Africa',
        population: 50000000,
      },
      {
        continentID: 2,
        continentName: 'North America',
        countryID: 1,
        countryName: 'United States',
        population: 330000000,
      },
      {
        continentID: 2,
        continentName: 'North America',
        countryID: 2,
        countryName: 'Canada',
        population: 38000000,
      },
      {
        continentID: 2,
        continentName: 'North America',
        countryID: 3,
        countryName: 'Mexico',
        population: 120000000,
      },
      {
        continentID: 3,
        continentName: 'South America',
        countryID: 1,
        countryName: 'Brazil',
        population: 200000000,
      },
      {
        continentID: 3,
        continentName: 'South America',
        countryID: 2,
        countryName: 'Argentina',
        population: 83000000,
      },
      {
        continentID: 3,
        continentName: 'South America',
        countryID: 3,
        countryName: 'Colombia',
        population: 67000000,
      },
      {
        continentID: 4,
        continentName: 'Asia',
        countryID: 1,
        countryName: 'China',
        population: 1400000000,
      },
      {
        continentID: 4,
        continentName: 'Asia',
        countryID: 2,
        countryName: 'Singapore',
        population: 5000000,
      },
      {
        continentID: 4,
        continentName: 'Asia',
        countryID: 3,
        countryName: 'Japan',
        population: 126000000,
      },
      {
        continentID: 5,
        continentName: 'Australia',
        countryID: 1,
        countryName: 'Australia',
        population: 25000000,
      },
      {
        continentID: 5,
        continentName: 'Australia',
        countryID: 2,
        countryName: 'New Zealand',
        population: 5000000,
      },
      {
        continentID: 5,
        continentName: 'Australia',
        countryID: 3,
        countryName: 'Papua New Guinea',
        population: 9000000,
      },
      {
        continentID: 7,
        continentName: 'Europe',
        countryID: 1,
        countryName: 'Slovakia',
        population: 6000000,
      },
      {
        continentID: 7,
        continentName: 'Europe',
        countryID: 2,
        countryName: 'Germany',
        population: 68000000,
      },
      {
        continentID: 7,
        continentName: 'Europe',
        countryID: 3,
        countryName: 'United Kingdom',
        population: 66000000,
      },
    ];
  }

  calculateAveragePopulation() {
    const aggregatedData: { [key: string]: { total: number; count: number } } =
      {};

    this.tableData.forEach((data) => {
      if (!aggregatedData[data.continentName]) {
        aggregatedData[data.continentName] = { total: 0, count: 0 };
      }
      aggregatedData[data.continentName].total += data.population;
      aggregatedData[data.continentName].count += 1;
    });

    for (const continentName in aggregatedData) {
      this.avgTableData.push({
        continentName,
        averagePopulation:
          aggregatedData[continentName].total /
          aggregatedData[continentName].count,
      });
    }
  }
}
