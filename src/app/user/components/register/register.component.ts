import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  feedback: string = '';
  error: string = '';
  isLoading: boolean = false;

  registerForm: FormGroup = new FormGroup({
    gender: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    address: new FormControl(''),
    birthdate: new FormControl(''),
    email: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    password: new FormControl('', Validators.compose([])),
    confirmPassword: new FormControl('', Validators.required),
  });

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.registerForm.value);
    this.isLoading = true;
    this.error = '';
    this.feedback = '';

    if (this.registerForm.valid) {
      if (
        this.registerForm.value.email ||
        this.registerForm.value.email ||
        this.registerForm.value.email
      ) {
        if (
          this.registerForm.value.password ===
          this.registerForm.value.confirmPassword
        ) {
          this.userService
            .createUser(this.registerForm.value)
            .subscribe((data) => {
              this.isLoading = false;
              this.router.navigate(['/login']);
            });
        } else {
          this.error = 'La vérification du mot de passe a échouée';
        }
      } else {
        this.error = 'Les champs * sont obligatoires';
      }
    } else {
      this.error = "Le formulaire n'est pas valide";
    }
  }
}
