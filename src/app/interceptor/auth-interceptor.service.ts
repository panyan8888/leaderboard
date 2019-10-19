import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import {StorageService} from '../services/storage.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private storageService: StorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.storageService.token;

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `${token.token_type} ${token.access_token}`
        }
      });
    }

    return next.handle(request);
  }
}
