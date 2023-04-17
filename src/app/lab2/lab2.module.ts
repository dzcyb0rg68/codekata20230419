import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Lab2Component } from './lab2.component';

const routes: Routes = [
  { path: 'lab1', component: Lab2Component },
];

@NgModule({
  declarations: [
    Lab2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lab2Module { }