import { Component, OnInit } from '@angular/core';
import { LocalStorageService }from 'src/app/local-storage.service'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user = {
    name: "Kyle",
    lastname: "Craven",
    email: "badluck@gmail.com",
    birthday: "11/11/1987",
    state: "Heredia",
    county: "Barva",
    town: "San Roque"
  }

  constructor(private localStorage: LocalStorageService,
               private navCtrl: NavController ) { }

  ngOnInit() {
  }

  logout(){
    this.localStorage.destroySession();
    this.navCtrl.navigateRoot( '/login' );
  }

}
