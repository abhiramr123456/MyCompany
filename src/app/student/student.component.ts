import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  httpData:any;
  constructor(public usersServiceObj:UsersService){}
  ngOnInit():void{
    this.usersServiceObj.getUsers().
    subscribe((users)=>{
      this.httpData=users;
      console.log(this.httpData)


})
  }
}
