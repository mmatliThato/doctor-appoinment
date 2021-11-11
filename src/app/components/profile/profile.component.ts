import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import {Doctor} from '../../interfaces/doctor.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  showModal : boolean = true;
  
  doctor: Doctor = {
    name: '',
    title: '',
    location: '',
    yearsOfex: 0,
    phonenumber: 0,
    Qualification: '',
    username: '',
    profileImage: ''
   
  };
constructor(private http:HttpClient,private auth :AuthService,    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.auth.getDoctor(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.doctor = res;
            // this.edit = true;
          },
          err => console.log(err)
        )
    }

  }
  //showModal used to show and hide modal

  show(){
		this.showModal =!this.showModal; 
	}

	hide(){
	  this.showModal = false;
	}
  

}
