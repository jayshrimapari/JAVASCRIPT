import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApicallRoutingModule } from './apicall-routing.module';
import { ApicallComponent } from './apicall.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ApicallComponent
  ],
  imports: [
    CommonModule,
    ApicallRoutingModule,
    FormsModule
  ]
})
export class ApicallModule { }
