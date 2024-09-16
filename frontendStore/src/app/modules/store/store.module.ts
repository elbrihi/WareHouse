import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { StoreComponent } from "./components/store.component";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../../core/shared/material.module";
import { HeaderComponent } from "../../core/layout/components/header/header.component";
import { MenuComponent } from "../../core/layout/components/menu/menu.component";
import { MainLayoutComponent } from "../../core/layout/containers/main-layout/main-layout.component";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        MainLayoutComponent,
        StoreComponent,
        HeaderComponent,
        MenuComponent,
      

    ],
    imports:[
        RouterModule,
        MaterialModule,
        CommonModule,
        BrowserAnimationsModule
    ],
    providers:[],
    exports: [
        MainLayoutComponent,
        StoreComponent,
        HeaderComponent,
        MenuComponent,
    ],

})

export class StoreModule
{
    public constructor()
    {
        console.log("StoreModule");
    }
}