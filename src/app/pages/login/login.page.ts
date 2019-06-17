import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UsersService } from 'src/app/services/users.service';
import { LocalStorageService }from 'src/app/local-storage.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUser = {
    email: 'leofp95@gmail.com',
    password: 'password3'
  };

  constructor( 
    private usersService: UsersService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  async login( fLogin: NgForm ) {

    if ( fLogin.invalid ) { return; }

    const valido = await this.usersService.login( this.loginUser.email, this.loginUser.password )
    if ( valido ) {
      this.navCtrl.navigateRoot( '/main-tabs' );
    }
  }

  mostrarRegistro() {
    this.navCtrl.navigateRoot( '/registro' );
  }

}
