import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FlightComponent } from './flight/flight.component';
import {FormsModule} from '@angular/forms';
const routes: Routes = [
  {path: 'flightInfo', component:FlightComponent},
  {path: 'about', component:AboutComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
