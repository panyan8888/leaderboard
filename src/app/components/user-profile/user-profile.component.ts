import { Component, OnInit } from '@angular/core';
import {UserInfoService} from '../../services/user-info.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userData;

  constructor(private userInfoService: UserInfoService) { }

  ngOnInit() {
    this.userInfoService.getUserData().subscribe(user => this.userData = user);
  }

}
