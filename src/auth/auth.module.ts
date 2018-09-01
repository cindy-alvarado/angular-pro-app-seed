import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// third-party modules
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// shared module
import { SharedModule  } from './shared/shared.module';

export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', loadChildren: './login/login.module#LoginModule' },
      { path: 'register', loadChildren: './register/register.module#RegisterModule' },
    ]
  }
];

export const firebaseConfig : FirebaseAppConfig = {
  apiKey: "AIzaSyBawFuxWFchoKSg0lCjRXr623mh275UoIQ",
  authDomain: "fitness-app-6686a.firebaseapp.com",
  databaseURL: "https://fitness-app-6686a.firebaseio.com",
  projectId: "fitness-app-6686a",
  storageBucket: "fitness-app-6686a.appspot.com",
  messagingSenderId: "667388101233"
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot()
  ]
})
export class AuthModule {}