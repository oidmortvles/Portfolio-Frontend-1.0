import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './base';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  //GENERAR TOKEN   
  public generarToken (loginData : any){
    return this.http.post(`${baseUrl}/auth/login`,loginData);
  }

}