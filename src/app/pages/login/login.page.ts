import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUser = {
    email: 'test1@test.com',
    password: '123456'
  };

  constructor( private usersService: UsersService,
               private navCtrl: NavController) { }

  ngOnInit() {
  }

  async login( fLogin: NgForm ) {

    if ( fLogin.invalid ) { return; }

    //const valido = await this.usersService.login( this.loginUser.email, this.loginUser.password );

    const valido = true;

    if ( valido ) {
      this.navCtrl.navigateRoot( '/main-tabs' );
    } else {
    }


  }

  mostrarRegistro() {
    this.navCtrl.navigateRoot( '/registro' );
  }

}
