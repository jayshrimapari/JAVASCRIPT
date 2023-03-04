import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { LandingComponent } from './landing/landing.component';
import { Currency1Pipe } from './currency1.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    StudentloginComponent,
    LandingComponent,
    Currency1Pipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
