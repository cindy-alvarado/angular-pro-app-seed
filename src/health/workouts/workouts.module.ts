import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// containers
import { WorkoutsComponent } from './containers/workouts/workouts.component';

export const ROUTES: Routes = [
    { path: '', component: WorkoutsComponent }
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
        WorkoutsComponent
    ],
    providers: []
})
export class WorkoutsModule {}