import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
    imports: [
      CommonModule,
      MatButtonModule,
      MatSidenavModule,
      MatListModule,
      MatIconModule,
      MatMenuModule ,
      MatToolbarModule,
      MatExpansionModule
    ],
    exports: [
      MatButtonModule,
      MatSidenavModule,
      MatListModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatMenuModule, 
      MatExpansionModule 
    ]
  
})
export class MaterialModule
{
    constructor(){
        console.log('hello material')      
    }
}