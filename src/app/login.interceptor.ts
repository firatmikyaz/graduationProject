import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {
  user: any;
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.user = JSON.parse(localStorage.getItem('user'));
    if (!this.user) {
      return next.handle(request);
    } else {
      const newRequest = request.clone({
        params: new HttpParams().set('token', this.user.jwt),
      });
      return next.handle(newRequest);
    }
  }
}
