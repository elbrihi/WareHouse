import { Component, EventEmitter, Output } from '@angular/core';

import { AuthService } from '../../../core/services/authservice/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
   
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
