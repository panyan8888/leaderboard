import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  isEmptyFields = false;
  backMailError = false;
  backPasswordError = false;
  errorMessage = {
    email: '',
    password: '',
  };
  userRegisterData = {
    name: '',
    email: '',
    password: '',
  };

  constructor(
    private userService: UsersService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  submitRegister(): void {
    const {name, email, password} = this.userRegisterData;
    if (!name || !email || !password) {
      this.isEmptyFields = true;
      return; }

    this.userService.registration(this.userRegisterData).subscribe(() => {
      this.router.navigate(['auth', 'login']);
    },
      error => {
        this.errorMessage = error.error.errors;
        if (this.errorMessage.email) {
          this.backMailError = true;
        } else {
          this.backMailError = false;
        }
        if (this.errorMessage.password) {
          this.backPasswordError = true;
        } else {
          this.backPasswordError = false;
        }
      });
  }
}
