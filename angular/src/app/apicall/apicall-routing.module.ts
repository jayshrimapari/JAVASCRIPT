import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApicallComponent } from './apicall.component';

const routes: Routes = [{ path: '', component: ApicallComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApicallRoutingModule { }
