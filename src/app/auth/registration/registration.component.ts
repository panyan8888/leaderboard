import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
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
    if (!name || !email || !password) { return; }

    this.userService.registration(this.userRegisterData).subscribe(() => {
      this.router.navigate(['auth', 'login']);
    });
  }
}
