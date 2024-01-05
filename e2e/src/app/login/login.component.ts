import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  public passwordType: string = 'password';

  loginForm: any = new FormGroup({
    'email': new FormControl('mangeshpawar830@gmail.com', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$')]),
    'password': new FormControl('Mangesh123', Validators.required),
  });

  public validateField: any = { email: false, password: false, invalidLogin: false };

  public userlogin(): void {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
  
    this.validateField.email = email === '';
    this.validateField.password = password === '';
  
    if (this.loginForm.valid) {
      const isCredentialsValid = this.checkCredentials(email, password);
  
      if (isCredentialsValid) {
        console.log('Login successful');
        this.router.navigate(['dashboard']);
      }
       else {
        this.handleFailedLogin();
      }
    } else {
     
      this.handleFailedLogin();
    }
  }
  
  private handleFailedLogin(): void {
    this.validateField.invalidLogin = true;
    console.log('Login failed');
    console.log('validateField.invalidLogin:', this.validateField.invalidLogin);
  }
  
  private checkCredentials(email: string, password: string): boolean {
    const hardcodedEmail = 'surajyelmate444@gmail.com';
    const hardcodedPassword = 'Suraj@123';
    return email === hardcodedEmail && password === hardcodedPassword;
  }
  

  public passwordShowHide(): void {
    if (this.passwordType == 'password') {
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }
  }
}