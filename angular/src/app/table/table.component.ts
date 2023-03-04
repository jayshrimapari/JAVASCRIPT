import { Component } from '@angular/core';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  show_color:boolean=true;
  
  show_content:boolean=false;
  showcontent(){
    this.show_content=true;
  }
  hidecontent(){
    this.show_content=false;
  }
  showcolor(){
    this.show_color=false;
  }



  users=[
    {id:"1",name:"jayshri",gender:"female",email:"jayshri@123.com"},
    {id:"2",name:"yogeshwar",gender:"male",email:"yogeshwar@123.com"},
    {id:"3",name:"ravindra",gender:"male",email:"ravindra@123.com"},
    {id:"4",name:"mahesh",gender:"male",email:"mahesh@123.com"},
    {id:"5",name:"shraddha",gender:"female",email:"shraddha@123.com"},
    {id:"6",name:"sakshi",gender:"female",email:"sakshi@123.com"},
    {id:"7",name:"yash",gender:"male",email:"yash@123.com"},
  ]

  

 
}