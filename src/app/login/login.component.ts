//import { LoginComponent } from './login.component';

/*original login.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators,  } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

} */

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators,  } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent {
  email:string;
  password: string;
  
  loginUser(){
    if(this.email=="praveen@gmail.com" && this.password== "praveen71"){
      alert("Loggined Successfully")
    }
    else{
      alert("Please enter correct details")
    }
  }
}







/* login validation
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent  {
  loginForm: FormGroup;
  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if(this.loginForm.valid) {
      console.log(this._v());
    }
  }
  _v() {
    return this.loginForm.value;
  }
}  */

