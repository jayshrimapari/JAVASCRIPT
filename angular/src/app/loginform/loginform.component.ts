import { Component } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent {
  keyupevent(data:any , inpboxvalue:any ):void{
    console.log(data);
    console.log(data.target.value);
    console.log(inpboxvalue);
    console.log(inpboxvalue.value);

  }


}
