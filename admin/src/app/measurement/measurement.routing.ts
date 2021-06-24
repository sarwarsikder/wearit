import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './add/add.component'

const routes: Routes = [
    {
        path: '',
        component: AddComponent,
        data: {
            title: 'Measurement create',
            urls: [{ title: 'Measurement', url: '/measurement' }, { title: 'New Measurement' }]
        }
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MeasurementRoutingModule { }