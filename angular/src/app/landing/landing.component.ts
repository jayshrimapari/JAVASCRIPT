import { Component } from '@angular/core';
import { DataService } from '../admin/adminsignup/data.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  city?: string;
  constructor(private dataservice :DataService){

  }
  ngOnInit(){
    this.city=this.dataservice.city;
    console.log(this.city);
    
  }


}
