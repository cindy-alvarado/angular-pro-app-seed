import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}


/*
var config = {
    apiKey: "AIzaSyBawFuxWFchoKSg0lCjRXr623mh275UoIQ",
    authDomain: "fitness-app-6686a.firebaseapp.com",
    databaseURL: "https://fitness-app-6686a.firebaseio.com",
    projectId: "fitness-app-6686a",
    storageBucket: "fitness-app-6686a.appspot.com",
    messagingSenderId: "667388101233"
  }; 
*/