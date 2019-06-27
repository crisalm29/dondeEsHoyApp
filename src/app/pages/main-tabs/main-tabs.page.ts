import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-main-tabs',
  templateUrl: './main-tabs.page.html',
  styleUrls: ['./main-tabs.page.scss'],
})
export class MainTabsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  async goToCart( evento ){

    this.navCtrl.navigateForward("/cart");

  }

}
