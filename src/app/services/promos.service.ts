import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PromosService {

  //pagePromos = 0;

  constructor( private http: HttpClient ) { }

  getPromos(){
    //this.pagePromos ++;
    //return this.http.get(`${URL}/promos?page=${this.pagePromos}`);
    return this.http.get(`${URL}/promos`);
  }
}
