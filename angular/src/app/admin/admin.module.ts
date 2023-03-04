import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';


@NgModule({
  declarations: [
    AdminsignupComponent,
    AdminlandingComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
