import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Lab1Module } from './lab1/lab1.module';
import { Lab2Module } from './lab2/lab2.module';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    Lab1Module,
    Lab2Module,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
