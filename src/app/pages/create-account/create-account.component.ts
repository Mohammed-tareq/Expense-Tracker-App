import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-account',
  imports: [ReactiveFormsModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {
  constructor( private userService: UserService , private route: Router) { }
  accountForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
  });
  createAccount() {

    this.userService.addUser(this.accountForm.value.name);
    this.route.navigateByUrl('home');


  }
}
