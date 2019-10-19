import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import UsersModel from '../models/UsersModel';
import {environment} from '../../environments/environment';
import RegistrationRequestModel from '../models/RegistrationRequestModel';
import RegistrationResponseModel from '../models/RegistrationResponseModel';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = `${environment.domain}/api/user`;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UsersModel> {
    return this.http.get<UsersModel>(this.url);
  }

  registration(userData: RegistrationRequestModel ): Observable<RegistrationResponseModel> {
    return this.http.post<RegistrationResponseModel>(this.url, userData);
  }
}

