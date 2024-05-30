import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ModelModule} from '../../shared/models/model.module';
import { LayoutModule } from '../../layout/layout.module';
import { DashboardLayoutComponent } from './containers/dashboard-layout/dashboard-layout.component';
import { DashboardComponent } from './components/dashboard.component';
import { CommonModule } from '@angular/common';
import { MaterialModuale } from '../../shared/material/material.module';
import { MenuService } from '../../core/services/menu.service';

@NgModule({
    declarations: [
        
    ],
    imports: [ 
        CommonModule , 
        RouterModule,    
        ModelModule,
        MaterialModuale
    ],
    
    exports: [],
    providers: [],
   
})
export class DashboardModule{
}