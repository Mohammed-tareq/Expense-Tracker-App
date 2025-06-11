import {  CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

constructor(private userSer:UserService) { }
  
  canActivate(): boolean {

    if(!this.userSer.isLoggedIn()) {
      this.userSer.deleteUserAccount();
      return false;
    }
    return true;
  }
}

