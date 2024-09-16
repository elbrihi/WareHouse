import { Component, EventEmitter, Output } from '@angular/core';

import { AuthService } from '../../../core/services/authservice/auth.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,

  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
 
})
export class HeaderComponent {
  @Output() menuToggled = new EventEmitter<boolean>();

  user: string = 'Enea';

 constructor(private authService: AuthService) { }

  logout(): void {
    this.authService.logout();
    console.log('Logged out');
  }


}
