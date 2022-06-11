import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from './login/interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  apiUrl:string = 'http://localhost:4201/login';

  login(authUser:Iuser) {

    return this.http.post(this.apiUrl,authUser)
  }

  saveUser(token:string){
    localStorage.setItem('token',token)
    // questa funzione aggiunge un token al local storage
  }

  logoutUser():boolean{
    localStorage.removeItem('token')
    return true
  }

  isUserLoggedIn():boolean{
    return localStorage.getItem('token') != null
    //  questa funzione controlla che ci sia un token nel localStorage (!= null)==>se esiste
  }
}
