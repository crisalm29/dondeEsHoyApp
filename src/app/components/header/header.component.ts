import { Component, OnInit, Input } from '@angular/core';
import { PopinfoComponent } from '../popinfo/popinfo.component';
import { PopoverController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;

  constructor( private popoverCtrl: PopoverController,
               private navCtrl: NavController ) { }

  ngOnInit() {
  }

  async mostrarPop( evento ){

    const popover = await this.popoverCtrl.create({
      component: PopinfoComponent,
      event: evento,
      mode: 'ios'//,
      //backdropDismiss: false
    });

    await popover.present();

    await popover.onWillDismiss();

  }

  async goToCart( evento ){

    this.navCtrl.navigateForward("/cart");

  }

}
