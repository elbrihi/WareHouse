import { ChangeDetectionStrategy } from '@angular/core';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})

export class HeaderComponent {

  
  @Output() menuToggled = new EventEmitter<boolean>();


  user: string = 'Enea';

  // constructor(private authService: AuthService) { }
  @Output() toggleMenu = new EventEmitter<void>();
  isMobile = false;

  ngOnInit() {
    this.isMobile = window.innerWidth <= 768;
  }
  logout(): void {
    console.log('Logged out');
  }
  constructor(){
    console.log("header");
  }
}
