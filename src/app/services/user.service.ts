import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/models/user';
import { v4 as uuidv4 } from 'uuid';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  USER: string = 'user';

  constructor(private router: Router) { }

  addUser(name: string): void {
    const user: User = {
      id: uuidv4(),
      name: name
    }

    localStorage.setItem(this.USER, JSON.stringify(user));
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem(this.USER) ?? '{}');
  }

  deleteUserAccount(): void {
    localStorage.removeItem(this.USER);
    this.router.navigateByUrl('create-account');
  }

  isLoggedIn()  {

    return Object.keys(this.getUser()).length > 0;

  }
}
