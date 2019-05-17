import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss']
})
export class PopinfoComponent implements OnInit {

  constructor( 
    private popoverCtrl: PopoverController,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onClick( option: string ){
    this.popoverCtrl.dismiss();
    
    switch(option){
      case "register": //Ruta temporal para acceder mientras se desarrolla
      this.router.navigateByUrl("/register");
      break;
      case "logout":
      //implementar logica de logout
      break;
    }
  }

}
