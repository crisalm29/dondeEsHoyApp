import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user';
import { LocalStorageService } from '../local-storage.service';
import { NavController } from '@ionic/angular';
import { UiServiceService } from './ui-service.service';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  token: string = null;
  private usuario: User = {};

  constructor( 
    private http: HttpClient,
    private storage: LocalStorageService, 
    private navCtrl: NavController,
    private uiService: UiServiceService
  ) { }

  login( email: string, password: string ) {

    const data = { email, password };

    return new Promise( 
      resolve => {
        this.http.post(`${URL}/client_user/login`, data ).subscribe( 
          async resp => {
            await this.guardarToken( resp['token'] );
            resolve(true);
          },
          error => {
            this.token = null;
              this.storage.destroySession();
              this.uiService.alertaInformativa(error['error'].err);
              resolve(false);
          }
        );
      }
    );
  }

  async cargarToken() {

    this.token = await this.storage.getSession() || null;

  }


  async validaToken(): Promise<boolean> {

    await this.cargarToken();

    console.log('token', this.token);

    if ( !this.token ) {
      this.navCtrl.navigateRoot('/login');
      return Promise.resolve(false);
    }


    return new Promise<boolean>( 
      resolve => {

        const headers = new HttpHeaders({
          'Authorization': 'Bearer ' + this.token
        });

        this.http.get(`${ URL }/client_user/check`, { headers }).subscribe(
          resp => {
            console.log(resp);
            this.usuario = resp['data'];
            resolve(true);
          },
          error => {
            console.log(error);
            this.uiService.alertaInformativa(error['error'].err);
            this.navCtrl.navigateRoot('/login');
            resolve(false);
          }
        );
      }
    );
  }

  async guardarToken( token: string ) {
    this.token = token;
    await this.storage.saveSession(token);

    await this.validaToken();
  }

  getUsers(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get<User[]>(`${URL}/Client_user`, {headers});
  }
}
