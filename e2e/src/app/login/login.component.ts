import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private loginService: LoginService) {}

  public passwordType: string = 'password';

  loginForm: FormGroup = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),
    'password': new FormControl('', Validators.required),
  });

  public validateField: any = { email: false, password: false, invalidLogin: false };

  public userlogin(): void {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.validateField.email = email === '';
    this.validateField.password = password === '';

    if (this.loginForm.valid) {
      this.loginService.checkCredentials({ email, password }).subscribe(
        () => {
          console.log('Login successful');
          this.router.navigate(['dashboard']);
        },
        (error) => {
          console.error('Login failed:', error);
          this.handleFailedLogin();
        }
      );
    } else {
      this.handleFailedLogin();
    }
  }

  private handleFailedLogin(): void {
    this.validateField.invalidLogin = true;
    console.log('Login failed');
    console.log('validateField.invalidLogin:', this.validateField.invalidLogin);
  }

  public passwordShowHide(): void {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }
}
