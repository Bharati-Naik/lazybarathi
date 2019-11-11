import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';




const routes: Routes = [

 {path:'home', component:HomeComponent},

 {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},

 {path: 'user', loadChildren: './user/user.module#UserModule'},

];

@NgModule({
  imports: [AdminModule,UserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


