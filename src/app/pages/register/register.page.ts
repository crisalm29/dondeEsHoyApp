import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    county: '',
    town: ''
  }

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  onSubmitTemplate(){
    console.log(this.user);
    this.router.navigateByUrl("/main-tabs");
  }

}
