import { Injectable, Inject } from '@angular/core';
import { SESSION_STORAGE,StorageService} from 'angular-webstorage-service';

const SESSION_KEY:string = 'dehsk';


@Injectable()
export class LocalStorageService {

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) { 

  }

  saveSession(token:string): void {
    this.storage.set(SESSION_KEY, token);
   }

  getSession(): string {
    return this.storage.get(SESSION_KEY);
   }


  destroySession(): void {
    this.storage.remove(SESSION_KEY);
   }


}
