import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  
  {path:'admin', component:AdminComponent,
  children:[
  {path:'dashboard',component:DashboardComponent},
  {path:'manage',component:ManageUsersComponent},
  {path:'setting',component:SettingsComponent}

]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
