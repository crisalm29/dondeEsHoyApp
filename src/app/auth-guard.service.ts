import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';
import { LocalStorageService } from './local-storage.service'
import { UsersService } from './services/users.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate{
    
    constructor(private usersService: UsersService) { }

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        return this.usersService.validaToken();
    }
}