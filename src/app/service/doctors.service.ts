import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class doctorsService {
 
  constructor(private http: HttpClient) { }

  TokenAPI = environment.URL;



    getdoctors(doctordetails:any)

	{
		console.log(doctordetails)
		return this.http.get(`${this.TokenAPI}/auth/getAll`,doctordetails) ;
  }
  

  
  update(id:any)

	{
		console.log(id)
		return this.http.put(`${this.TokenAPI}/auth/`,id) ;
	}


}
