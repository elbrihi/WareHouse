import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'

@NgModule({
    imports: [
      CommonModule,
      MatButtonModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule
    ],
    exports: [
      MatButtonModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule
    ]
  })
export class MaterialModuale
{
    constructor(){
        console.log('hello material')      
    }
}