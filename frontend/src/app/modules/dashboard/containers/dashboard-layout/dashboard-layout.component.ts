import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../../../../layout/components/header/header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModuale } from '../../../../shared/material/material.module';
import { MatMenuModule } from '@angular/material/menu';
import { Menu } from '../../../../core/models/menu-item.model';
import { MenuComponent } from '../../../../layout/components/menu/menu.component';
import { MenuService } from '../../../../core/services/menu.service';
import { MatListModule } from '@angular/material/list';
import { PageHeaderComponent } from '../../../../layout/components/page-header/page-header.component';
import { AuthService } from '../../../../core/services/authservice/auth.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,  // Add RouterModule to imports
    HeaderComponent,
    MenuComponent,
    PageHeaderComponent,
    MaterialModuale,
    MatMenuModule,
    MatListModule,
    
  ]
  
})
export class DashboardLayoutComponent 
{

  constructor(private authService: AuthService)
  {
      console.log(this.authService.hasToken())
  }
  opened = true;

  toggle(): void {
    this.opened = !this.opened;
  }

  menu: Menu = [
    {
      title: 'Home',
      icon: 'home',
      link: '/home',
      color: '#ff7f0e',
    },
    {
      title: 'Statistics',
      icon: 'bar_chart',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Sales',
          icon: 'money',
          link: '/sales',
          color: '#ff7f0e',
        },
        {
          title: 'Customers',
          icon: 'people',
          color: '#ff7f0e',
          link: '/customers',
        },
      ],
    },
  ];



}
