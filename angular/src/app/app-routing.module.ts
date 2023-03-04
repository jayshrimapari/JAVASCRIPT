import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginformComponent } from './loginform/loginform.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';

const newLocal = './adminlogin/adminlogin.module';
const routes: Routes = [
  {path:'loginform' , component:LoginformComponent},
  {path :'studentlogin', component :StudentloginComponent},
  {path:'',component:LandingComponent},
  {path:'landing',component:LandingComponent},
  {path : 'admin', loadChildren : ()=> import('./admin/admin.module').then(m=>m.AdminModule)},
  { path: 'directives', loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule) },
  { path: 'table', loadChildren: () => import('./table/table.module').then(m => m.TableModule) },
  { path: 'apicall', loadChildren: () => import('./apicall/apicall.module').then(m => m.ApicallModule) },
];
 
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
