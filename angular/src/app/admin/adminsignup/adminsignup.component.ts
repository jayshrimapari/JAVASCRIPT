import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Currency1Pipe } from 'src/app/currency1.pipe';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.scss']
})
export class AdminsignupComponent {
  city?:string
  fName:string='Jayshri Yogeshwar';
  today = Date.now();
  
    
  constructor(private dataservice:DataService){
    

  }
  ngOnInit(){
    this.city=this.dataservice.city;
    console.log(this.city);
    

  }
}
