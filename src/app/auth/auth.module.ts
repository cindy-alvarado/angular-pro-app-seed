import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

export const ROUTES: routes = [
    {
        path: 'auth',
        children: [
            {path: '', pathMath: 'full', redirectTo: 'login'},
            { path: 'login', loadChildren: './login/login.module#LoginModule' },
            { path: 'register', loadChildren: './register/register.module#RegisterModule' },

        ]
    }
];
  
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ]
})
export class AuthModule {}