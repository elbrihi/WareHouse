import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '../../../../core/services/authservice/auth.service';
import { Credentials } from '../../../../core/services/user/credentials.model';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule   ,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
    
  });
  private formSubmitAttempt?: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService

    
  ) {}

  ngOnInit() {
    //console.log(this.form);
  }

  isFieldInvalid(field: string) {
   
  }

  onSubmit() {

    
    if (this.form.valid) {
      const credentials: Credentials = this.form.value;

      this.authService.login(credentials);
    }
    this.formSubmitAttempt = true;
    
    
  }
}