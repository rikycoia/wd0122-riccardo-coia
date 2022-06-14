import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

  apiUrlRegister:string = 'http://localhost:4201/register';
  apiUrl:string = 'http://localhost:4201/users';
  apimovie:string = 'https://localhost:4201/api/movie/popular'

  registerUser(user:any) {
    return this.http.post(this.apiUrlRegister, user)
  }

  getUser(id:number) {
    return this.http.get(this.apiUrl+'/'+id)//'http://localhost:4201/users/1'
  }
  datiUtente(datiutente:any){
    return this.http.get(this.apiUrl, datiutente)
  }
}
