import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import ( LoginComponent ) from './containers/login/login.component';

import { SharedModule } from '../../shared/SharedModule'

export const ROUTES: Routes = [
    { path: '' , component: LoginComponent }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        LoginComponent
    ]
})
export class LoginModule {}