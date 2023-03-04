import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
//   show_content:boolean=false;
//   list=['Jayshri','Yogeshwar','Mahesh','Ravindra','Shraddha','Sakshi','Yash'];
//   show_list:boolean=false;
//click_show:boolean=false;

// showcontent(){
//   this.show_content=true;
// }
// showlist(){
//   this.show_list=true;

// }
// hidelist(){
//   this.show_list=false;

// }
// clicktoshow(){
//   this.click_show=true;
// }
// clickthide(){
//   this.click_show=false;
// }
show_content:boolean=false;
users=[
  {id:"1",name:"jayshri",gender:"female",email:"jayshri@123.com"},
  {id:"2",name:"yogeshwar",gender:"male",email:"yogeshwar@123.com"},
  {id:"3",name:"ravindra",gender:"male",email:"ravindra@123.com"},
  {id:"4",name:"mahesh",gender:"male",email:"mahesh@123.com"},
  {id:"5",name:"shraddha",gender:"female",email:"shraddha@123.com"},
  {id:"6",name:"sakshi",gender:"female",email:"sakshi@123.com"},
  {id:"7",name:"yash",gender:"male",email:"yash@123.com"},
]
showtable(){
  this.show_content=true;
}  
hidetable(){
  this.show_content=false;
}

}
