import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import UsersModel from '../models/UsersModel';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = `${environment.domain}/api/user`;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UsersModel> {
    return this.http.get<UsersModel>(this.url);
  }

  registration(userData) {
    return this.http.post(this.url, userData);
  }
}

