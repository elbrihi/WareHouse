import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardLayoutComponent } from './modules/dashboard/containers/dashboard-layout/dashboard-layout.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { MenuComponent } from './layout/components/menu/menu.component';

export const routes: Routes = [
    {
      path: 'login',
      component: LoginComponent
    },
    {   
      path: 'dashboard',
      component: DashboardLayoutComponent,
      canActivate: [AuthGuard],
      children: [
       
      ]
    },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

// { path: 'dashboard', canActivate: [AuthGuard], loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
