import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {StorageService} from './storage.service';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = `${environment.domain}/oauth/token`;

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
  ) {}

  loginUser(userLoginData) {
    return this.http.post(this.url, {
      client_id: 2,
      client_secret: 'QuOYVk5DsIzSUWYSObvufBiWs6EIBIbTsbHHDWTf',
      grant_type: 'password',
      ...userLoginData,
    }).pipe(
      tap(tokenData => this.storageService.saveTokenData(tokenData)),
    );
  }
}
