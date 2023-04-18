import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { Lab2Component } from './lab2.component';
import { PopupEditorModule } from './popup-editor/popup-editor.module';
import { AgGridModule } from 'ag-grid-angular';
import { ButtonRendererComponent } from './button-renderer.component';

const routes: Routes = [{ path: 'lab2', component: Lab2Component }];

@NgModule({
  declarations: [Lab2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PopupEditorModule,
    MatDialogModule,
    AgGridModule,
  ],
})
export class Lab2Module {}
