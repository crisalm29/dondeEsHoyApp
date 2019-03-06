import { Component } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { Routes, Router, RouterModule } from '@angular/router';


declare var google;


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {


  map: any;
  geolocation = Geolocation;
  constructor(private router: Router) {
  	this.getPosition();
  }


  ionViewDidLoad(){
    this.getPosition();
  }

  getPosition():any{

    
    this.geolocation.getCurrentPosition()
    .then(response => {
    	console.log("get location response");
      this.loadMap(response);
    })
    .catch(error =>{
      console.log("error:" + error);
    })
  }



loadMap(position: Geoposition){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude, longitude);
    
    // create a new map by passing HTMLElement
    let mapEle: HTMLElement = document.getElementById('map');

    // create LatLng object
    let myLatLng = {lat: latitude, lng: longitude};

    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });


    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      let marker = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        title: 'Hello World!'
      });	
      marker.addListener('click', () => {
        
        this.router.navigateByUrl('/place-page');

      });
      mapEle.classList.add('show-map');
    });
  }
}
