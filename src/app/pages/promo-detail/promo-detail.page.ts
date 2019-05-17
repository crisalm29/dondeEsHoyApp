import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-promo-detail',
  templateUrl: './promo-detail.page.html',
  styleUrls: ['./promo-detail.page.scss'],
})
export class PromoDetailPage implements OnInit {

  private promoId: string;

  constructor( private route: ActivatedRoute, 
    private navCtrl: NavController 
    ) { }

  ngOnInit() {
    this.promoId = this.route.snapshot.paramMap.get('id');
  }

}
