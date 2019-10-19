import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../services/storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  hasToken: boolean;

  constructor(
    private storageService: StorageService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.storageService.tokenData$.subscribe(token => this.hasToken = !!token);
  }

  logout(): void {
    this.storageService.token = null;
    this.router.navigate(['/']);
  }
}
