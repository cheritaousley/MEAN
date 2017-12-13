import { Component } from '@angular/core';
import {User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';
  users =[];
  user = new User();
  registered = false;
  // user = {
  //   firstName: '',
  //   lastName: '',
  //   email:'',
  //   password:'',
  //   confirmPW:'',
  //   address:'',
  //   city:'',
  //   state: '',
  //   lucky: ''
  // }
  onSubmit(){
    console.log("MADE IT");
    // this.user = {
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    //   password: '',
    //   confirmPW: '',
    //   address: '',
    //   city: '',
    //   state: '',
    //   lucky: ''
    // }
    this.user =new User();
    this.registered = true;

  }
}
