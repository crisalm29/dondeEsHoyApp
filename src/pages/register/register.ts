import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
 
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  createSuccess = false;
  registerCredentials = { email: '', password: '', name: '', lastName: '' };
 
  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController) { }
 
  public register() {
    let registerData = {
      email: this.registerCredentials.email,
      name: this.registerCredentials.name,
      lastName: this.registerCredentials.lastName,
      password: this.registerCredentials.password,

    };
    this.auth.register(registerData).subscribe(data => {
      console.log(data.data);
      if (data.data.success) {
        this.createSuccess = true;
        this.showPopup("Success", "Account created.");
        
      } else {
        this.showPopup("Error", "Problem creating account.");
      }
    },
      error => {
        this.showPopup("Error", error);
      });
  }
 
  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.nav.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }
}