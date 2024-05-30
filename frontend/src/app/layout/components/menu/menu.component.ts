import { Component, Input } from '@angular/core';
import { Menu } from '../../../core/models/menu-item.model';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Input() menu: Menu = [];

}
