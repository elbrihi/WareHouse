import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';
import { DashboardModule} from './modules/dashboard/dashboad.module'
import { ModelModule } from './shared/models/model.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './core/services/authservice/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModuale } from './shared/material/material.module';
import { MenuComponent } from './layout/components/menu/menu.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { HeaderComponent } from './layout/components/header/header.component';

@NgModule({

  imports: [ 
             CommonModule,
             BrowserModule,
             BrowserAnimationsModule,
             ModelModule,
             ReactiveFormsModule,
             HttpClientModule,
             MaterialModuale,
             DashboardModule,
             AppRoutingModule,
             MatExpansionModule,
             MenuComponent,

            
          ],
  declarations: [
    AppComponent,


  ], 
  providers: [
    AuthService
  ],
  bootstrap: [
    AppComponent,
  
  ],
})
export class AppModule {

    
    constructor()
    {
      
    }
}
