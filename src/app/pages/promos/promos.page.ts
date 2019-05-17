import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-promos',
  templateUrl: './promos.page.html',
  styleUrls: ['./promos.page.scss'],
})
export class PromosPage implements OnInit {

  promos = [
    {
      id: "el bule",
      name: "Bulevar Relax",
      type: "Local",
      description: "Contamos con diferentes ambientes, buenas promociones, precios mas atractivos, buena atencion, servicio express y buenas comidas.",
      imgSrc: "./assets/images/bulevar.jpg"
    },
    {
      id: "tribuuuu",
      name: "Tribbu",
      type: "Local",
      description: "Bienvenidos a la Tribu...El nuevo concepto en Heredia para pasarla bien con una amplia variedad de deliciosos snacks. Nuestra misión es crear un ambiente agradable y tranquilo para todos nuestros clientes.",
      imgSrc: "./assets/images/tribbu.jpg"
    },
    {
      id: "fofoo",
      name: "Rancho DFofo Bar Restaurante",
      type: "Local",
      description: "Pint of Science es un festival de ciencia internacional, donde 24 países alrededor del mundo 🌎 unen fuerzas en el objetivo de divulgar ciencia. 🧬🔬 Por segunda vez vamos a estar en Heredia este próximo Lunes 20 de Mayo, en Rancho DFofo Bar Restaurante.",
      imgSrc: "./assets/images/fofo.png"
    },
    {
      id: "guarooo",
      name: "Bar España",
      type: "Local",
      description: "hola y saludos amigos de facebook recuerden invitados este domingo 9:pm tito villalobos en vivo entrada gratis los esperamos",
      imgSrc: "./assets/images/espana.jpg"
    }
  ];

  constructor( private navCtrl: NavController ) { }

  ngOnInit() {
  }

  showDetails(id: string){
    this.navCtrl.navigateForward("/promo-detail/" + id);
  }

}
