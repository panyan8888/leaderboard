import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  url = `${environment.domain}/api/me`;

  constructor(private http: HttpClient) {}

  getUserData() {
    return this.http.get(this.url);
  }
}
