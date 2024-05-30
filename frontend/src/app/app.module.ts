import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardModule} from './modules/dashboard/dashboad.module'
import { ModelModule } from './shared/models/model.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './core/services/authservice/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({

  imports: [ CommonModule,
             BrowserModule,
             BrowserAnimationsModule,
             ModelModule,
             ReactiveFormsModule,
             HttpClientModule,
             DashboardModule,
             AppRoutingModule],
  declarations: [AppComponent ], 
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {

    
    constructor()
    {
      
    }
}
