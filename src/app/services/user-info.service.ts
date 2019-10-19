import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import UsersModel from '../models/UsersModel';
import UserInfoModel from '../models/UserInfoModel';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  url = `${environment.domain}/api/me`;

  constructor(private http: HttpClient) {}

  getUserData(): Observable<UserInfoModel> {
    return this.http.get<UserInfoModel>(this.url);
  }
}
