import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {TOKEN_STORAGE_KEY} from '../constants/keys.constant';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  tokenData$ = new BehaviorSubject(null);

  get token() {
    return this.tokenData$.getValue();
  }
  set token(data) {
    this.tokenData$.next(data);
  }

  constructor() {
    this.token = JSON.parse(localStorage.getItem(TOKEN_STORAGE_KEY || ''));
  }

  saveTokenData(tokenData) {
    localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(tokenData));
    this.token = tokenData;
  }
}
