import { Component } from '@angular/core';
import { UsersdataService } from '../service/usersdata.service';

@Component({
  selector: 'app-apicall',
  templateUrl: './apicall.component.html',
  styleUrls: ['./apicall.component.scss']
})
export class ApicallComponent {
//   users:any;
//   data:any;
//   constructor(private usersdataService:UsersdataService){
//  this.usersdataService.users().subscribe((data)=>{
//   console.log("data",data);
//   this.users=data;
  
//  })
// }
users:any;
data:any;
constructor(private  usersdataService: UsersdataService ){
  this.usersdataService.users().subscribe((data) =>{
    console.log("data",data);
this.users=data;
    
  })
  }
  getUserFormData(data:any){
    console.log(data);
    this.usersdataService.saveUser(data).subscribe((result)=>{
      console.log(result);
      
    
    })
  }
  }





