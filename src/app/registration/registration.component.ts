/* import { Component, OnInit } from '@angular/core';

//import { FormControl , Validators} from '@angular/forms';
//import { MatFormFieldModule } from '@angular/material/form-field';
//import { FormGroup } from '@angular/forms';



//import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { FormGroup, FormBuilder, Validators , FormControl } from '@angular/forms';

//import { CustomvalidationService } from '../services/customvalidation.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: any= FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      //alert('REGISTRATION SUCCESS!');
      //\n\n' + JSON.stringify(this.registerForm.value))
  }
} 
*/
/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

} */
