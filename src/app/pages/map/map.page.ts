import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { Router } from '@angular/router';

declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  map: any;
  geolocation = Geolocation;
  constructor(private router: Router) {
  	this.getPosition();
  }

  ngOnInit() {
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
      let image = new google.maps.MarkerImage(
          '/assets/images/marker1.png',
          null,
          null,
          null,
          new google.maps.Size(20, 32)
        );
      let marker = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        title: 'Hello World!',
        icon: image
      });	
      marker.addListener('click', () => {
        
        this.router.navigateByUrl('/map');

      });
      mapEle.classList.add('show-map');
    });
  }

}
