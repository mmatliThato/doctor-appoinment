import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import {Doctor} from '../../interfaces/doctor.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  showModal : boolean = true;
  
 
  name: any;
  title: any;
  location: any;
  yearsOfex: any;
  phonenumber: any;
  Qualification: any;
  username: any;
  profileImage: any;

  doctor: Doctor = {
    _id:'',
    name: '',
    title: '',
    location: '',
    yearsOfex: 0,
    phonenumber: 0,
    Qualification: '',
    username: '',
    profileImage: ''
  };

  token:any;

 
  decodedToken:any;
  isExpired:any;


id :any
constructor(private http:HttpClient,private auth :AuthService,    private activatedRoute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
   
    this.token = localStorage.getItem("blog-token")
    if(!this.token)
    {
       this.router.navigate(['']);
    }


    const helper = new JwtHelperService();

     this.decodedToken = helper.decodeToken(this.token);
   
     
    console.log("hey decoded",this.decodedToken.user);
    
    
    this.doctor._id =this.decodedToken.user._id
    this.doctor.username =this.decodedToken.username;
    this.doctor.name=this.decodedToken.name;
    this.doctor.location=this.decodedToken.location;
    this.doctor.Qualification=this.decodedToken.Qualification
    this.doctor.yearsOfex=this.decodedToken.yearsOfex;
    this.doctor.title=this.decodedToken.title;
    console.log("hey username", this.doctor._id);
     const expirationDate = helper.getTokenExpirationDate(this.token);
     this.isExpired = helper.isTokenExpired(this.token);



     if(this.isExpired)
     {

      //  Swal.fire({
      //    icon: 'error',
      //    title: 'Oops...',
      //    text: 'Your Session Time has Expired Please login again!',
      //    footer: '<a href="">Why do I have this issue?</a>'
      //  })
       this.router.navigate(['']);

       localStorage.clear();
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
