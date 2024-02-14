import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  feedback: string = "";
  error: string = "";

  constructor(private authService: AuthService) {}

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  onSubmit(){
    console.log(this.loginForm.valid);
    this.authService.signIn(this.loginForm.value);
  }
}