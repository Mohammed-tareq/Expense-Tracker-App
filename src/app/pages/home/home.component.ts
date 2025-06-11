import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormWrapperComponent } from "../../components/form-wrapper/form-wrapper.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  imports: [FormWrapperComponent,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor( public userser:UserService){}

  budgetForm:FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(3)]),
    budget: new FormControl(null,[Validators.required, Validators.min(1)]),
  });
  ExpanceForm:FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(3)]),
    amount: new FormControl(null,[Validators.required, Validators.min(1)]),
    category: new FormControl(null,[Validators.required]),
  });
}

