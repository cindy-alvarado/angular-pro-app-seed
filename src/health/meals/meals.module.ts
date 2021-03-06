import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// containers
import { MealsComponent } from './containers/meals/meals.component';

export const ROUTES: Routes = [
    { path: '', component: MealsComponent }
];

@NgModule({
    // imports from angular 
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES)
    ],

    // ** this is where your imported components go ** //  
    declarations: [
        MealsComponent
    ],
    providers: []
})
export class MealsModule {}