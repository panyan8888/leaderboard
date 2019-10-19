import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import UsersInnerModel from '../../models/UsersInnerModel';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  constructor(private usersService: UsersService) { }
  usersList: Array<UsersInnerModel>;

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.usersService.getUsers()
      .subscribe(response => {
        this.usersList = response.data.sort((a, b) => b.score - a.score);
      });
  }
}
