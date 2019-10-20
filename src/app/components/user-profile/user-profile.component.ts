import { Component, OnInit } from '@angular/core';
import {UserInfoService} from '../../services/user-info.service';
import UserInfoModel from '../../models/UserInfoModel';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  // userData: UserInfoModel;
  userData = {
    name: '',
    email: '',
    email_verified_at: '',
    updated_at: '',
    created_at: '',
    id: 0,
  };
  responseIsReady = false;

  constructor(private userInfoService: UserInfoService) { }

  ngOnInit() {
      this.getUserdata();
  }
  getUserdata(): void {
    this.userInfoService.getUserData()
      .subscribe(response => {
        this.userData = response;
        this.userData.name = response.name;
        this.userData.email = response.email;
      });
  }

}
