import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  nombre: string;

  user = {
    name: '',
    lastname: '',
    email: '',
    password: '',
    birthday: '',
    state: '',
    country: '',
    town: ''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmitTemplate(){
    console.log(this.user);
  }

}
