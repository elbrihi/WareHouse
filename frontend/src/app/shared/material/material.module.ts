import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
      CommonModule,
      MatButtonModule,
      MatSidenavModule,
      MatListModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatMenuModule 
    ],
    exports: [
      MatButtonModule,
      MatSidenavModule,
      MatListModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatMenuModule 
    ]
  
})
export class MaterialModuale
{
    constructor(){
        console.log('hello material')      
    }
}