import { Component, Input, Output, EventEmitter } from '@angular/core';



// type User={
//   id:string,
//   avatar:string,
//   name:string
//  }
interface User{
  id:string,
  avatar:string,
  name:string
 }
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 @Input({required:true}) user!:User
 @Input({required:true}) selected!:boolean
  @Output() select=new EventEmitter();
  // avatar = input.required<string>()
  // name = input.required<string>()


  get image(){
    return "../assets/users/" + this.user.avatar
  }
  onSelectUser() {
    return this.select.emit(this.user.id);
  }
}
