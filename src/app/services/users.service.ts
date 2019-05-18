import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http: HttpClient ) { }

  getUsers(){
    return this.http.get<User[]>(`${URL}/Client_user`);
  }
}
