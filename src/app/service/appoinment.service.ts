import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Appoinment, Appoinment1} from '../interfaces/appoinment.interface'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class appoinmentService {
 
  constructor(private http: HttpClient) { }

  TokenAPI = environment.URL;



    addappoinmentdata(DoctorId:any)
	{
		console.log(DoctorId)
		return this.http.post(`${this.TokenAPI}/appoinement`,DoctorId) ;
	}


  getappoinment(id: string): Observable<Appoinment>{
    return this.http.get<Appoinment>(`${this.TokenAPI}/appoinement/get/${id}`);
  }

  updateProduct(id: string, product: Appoinment1): Observable<Appoinment> {

     

    return this.http.put<Appoinment>(`${this.TokenAPI}/appoinement/update/${id}`, product);
  }

  getdallappoinments(appointments:any)
	{
		console.log(appointments)
		return this.http.get(`${this.TokenAPI}/appoinement/getAll/`,appointments) ;
  }
  





}
