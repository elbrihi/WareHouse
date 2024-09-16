import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './modules/store/components/store.component';
import { MainLayoutComponent } from './core/layout/containers/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: "", 
    children: [
      { path: 'store', component: StoreComponent }  // StoreModule component
    ]
   },
  {path: "**", redirectTo: "/store"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
