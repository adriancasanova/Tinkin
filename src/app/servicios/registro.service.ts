import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registro } from '../registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
 // private apiUrl: string = 'http://localhost:8080/usuario';
  //private apiUrl: string = "https://tucvbackjava.herokuapp.com/usuario";
 
    constructor(private http: HttpClient) {}
    
    register(user: Registro) {   
     
      console.log("register");
    
   }
}
