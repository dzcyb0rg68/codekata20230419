import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { Lab1Component } from './lab1.component';

const routes: Routes = [{ path: 'lab1', component: Lab1Component }];

@NgModule({
  declarations: [Lab1Component],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class Lab1Module {}
