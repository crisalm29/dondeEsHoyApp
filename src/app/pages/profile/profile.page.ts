import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
