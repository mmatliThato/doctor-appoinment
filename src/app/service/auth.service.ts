import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Doctor} from '../interfaces/doctor.interface'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(private http: HttpClient) { }

  TokenAPI = environment.URL;


  login(formData:any)
  {
 return this.http.post<any>(`${this.TokenAPI}/auth/signin/`,formData).pipe(
        map((token)=>{
          console.log('token');
          localStorage.setItem('blog-token',token.accessToken);
          return token;
        })
    );

  }


  registerUser(user: any){
    return this.http.post(`${this.TokenAPI}/auth/signup/`,user)
  }

  registerpatients(user: any){
    return this.http.post(`${this.TokenAPI}/authp/signup/`,user)
  }

  loginpatients(formData:any)
  {
 return this.http.post<any>(`${this.TokenAPI}/authp/signin/`,formData).pipe(
        map((token)=>{
          console.log('token');
          localStorage.setItem('blog-token',token.accessToken);
          return token;
        })
    );

  }


  getDoctor(id: string): Observable<Doctor>{
    return this.http.get<Doctor>(`${this.TokenAPI}/auth/${id}`);
  }



}
