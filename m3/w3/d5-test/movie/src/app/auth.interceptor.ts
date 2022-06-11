import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let UserToken = localStorage.getItem('token'); //prendo il token dal local storage e "gli do una variabile"

    if(UserToken != null){
      var newRequest = request.clone({

        headers: request.headers.append('Authorization', 'Bearer ' + UserToken)
      })
    }

    else{ var newRequest = request};

    return next.handle(newRequest); //.handle "fa continuare" la chiamata mentre l'interceptor la "blocca"
  }
}
