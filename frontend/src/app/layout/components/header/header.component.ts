import { Component, EventEmitter, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from '../../../core/services/authservice/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule,MatButtonModule,MatMenuModule ],
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
