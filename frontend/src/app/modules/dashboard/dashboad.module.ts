import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ModelModule} from '../../shared/models/model.module';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        
    ],
    imports: [ 
        CommonModule , 
        RouterModule,    
        ModelModule,
    ],
    
    exports: [],
    providers: [],
   
})
export class DashboardModule{
}