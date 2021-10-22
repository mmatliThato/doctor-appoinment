import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from 'src/app/service/auth.service';
import {Doctor} from '../../interfaces/doctor.interface';

import { Router, ActivatedRoute } from '@angular/router';
import { appoinmentService } from 'src/app/service/appoinment.service';
@Component({
  selector: 'app-doctorprofile',
  templateUrl: './doctorprofile.component.html',
  styleUrls: ['./doctorprofile.component.css']
})
export class DoctorprofileComponent implements OnInit {
  doctor: Doctor = {
    name: '',
    title: '',
    location: '',
    yearsOfex: 0,
    phonenumber: 0,
    Qualification: '',
    username: '',
   
  };

  DoctorId:any;
  constructor(private http:HttpClient,private auth :AuthService,    private activatedRoute: ActivatedRoute,
    private appoinement :appoinmentService,private router:Router
    
    
    ) { }

  ngOnInit(): void {

const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.auth.getDoctor(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.doctor = res;
            this.DoctorId = res._id;
            localStorage.setItem('DoctorId',this.DoctorId )
        
          },
          err => console.log(err)
        )
    }


  }


// makeappoinment(){
//   let userId = localStorage.getItem("userId")
 
//   let formdata = { 
//     // DoctorId:DoctorId,
//     userId:userId
//   }
//   console.log('my form', formdata)
//   this.appoinement.addappoinmentdata(formdata).subscribe(
//     (res: any) => {
//       console.log("heyyyy",res);
  
   
//     },
//     (err: any) => {
//       console.log(err)
    
//     })


// }

}
