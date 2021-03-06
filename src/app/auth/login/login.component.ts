import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLoginData = {
    username: '',
    password: '',
  };

  invalidCredentialsError = false;
  errorMessage: string;
  isEmptyFields = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  submitLogin(): void {
    const {username, password} = this.userLoginData;
    if (!username || !password) {
      this.isEmptyFields = true;
    }

    this.authService.loginUser(this.userLoginData).subscribe(() => {
      this.router.navigate(['/']);
    },
      error => {
        this.errorMessage = error.error.error;
        if (this.errorMessage) {
          this.invalidCredentialsError = true;
        } else {
          this.invalidCredentialsError = false;
        }
      });
  }
}
