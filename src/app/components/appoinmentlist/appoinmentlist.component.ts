import { Component, OnInit } from '@angular/core';
import { appoinmentService } from 'src/app/service/appoinment.service';

import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Appoinment } from 'src/app/interfaces/appoinment.interface';

@Component({
  selector: 'app-appoinmentlist',
  templateUrl: './appoinmentlist.component.html',
  styleUrls: ['./appoinmentlist.component.css']
})
export class AppoinmentlistComponent implements OnInit {
  
 appoinment : Appoinment = {
 
    email: '',
    appoinmentDate: '',
    name: '',
   status:'',
    
}




  DoctorId:any;

  appoinement:any= [];
  constructor(private appoinmentservice:appoinmentService,
    private http:HttpClient,
    private activatedRoute :ActivatedRoute

) { }

  ngOnInit(): void {


  
    
    this.DoctorId = localStorage.getItem("DoctorId")

     console.log('they dpc',this.DoctorId)

    let formdata = { 

      DoctorId:this.DoctorId, 
    }
    
      this.appoinmentservice.getappoinment(this.DoctorId)
        .subscribe(
          res => {
            console.log(res);
            this.appoinement = res;
            console.log('im here',this.appoinement)
          },
          err => console.log(err)
        )      
  }



  update(event:any, userId:any) {
 
    let line = {'status':event.target.value}
    
    this.appoinmentservice.updateProduct(userId, line)
      .subscribe(
        res => {
          console.log(res);
     
        },
        err => console.log(err)
      )
   
  
      }



}
