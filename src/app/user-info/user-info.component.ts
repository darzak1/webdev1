import { Component, OnInit } from '@angular/core';
import {User} from "./User";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  name: string = 'Jan1';
  name2: string = '';
  showP: boolean =true;

  userArray: User [] = [
    new User("Jan", "Kowalski", 30, "Kraków"),
    new User("Adam", "Nowak", 50, "Warszawa"),
    new User("Stefan", "Polak", 25, "Poznań"),
  ]

  isDisabled(): boolean{
    if (this.name === 'Jan'){
      return false
    } else {
      return true;
    }
  }

  constructor() { }

  ngOnInit() {
  }
  deleteUser() {
    this.name = ''
  }
  showPrimary (age: number):boolean{
    if (age > 40){
      return true
    } else
    return false;
  }

}
