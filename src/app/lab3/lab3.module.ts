import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { Lab3Component } from './lab3.component';

const routes: Routes = [{ path: 'lab3', component: Lab3Component }];

@NgModule({
  declarations: [Lab3Component],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    AgGridModule,
  ],
})
export class Lab3Module {}
