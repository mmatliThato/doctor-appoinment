import { Component, OnInit } from '@angular/core';
import { doctorsService } from 'src/app/service/doctors.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  doctor:any = [];

  

  doctordetails:any
  constructor(private doctors:doctorsService) { }

  ngOnInit(): void {







    this.doctors.getdoctors(this.doctordetails).subscribe(
      (res: any) => {
        this.doctor=res
        console.log("doctors",this.doctor);
  
      },
      
      (err: any) => {
        console.log(err)
      
      })


  }

}
