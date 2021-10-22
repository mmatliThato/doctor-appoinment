import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, Validators, ValidationErrors, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { appoinmentService } from 'src/app/service/appoinment.service';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrls: ['./appoinment.component.css']
})
export class AppoinmentComponent implements OnInit {
  public successMsg:any;
  public errorMsg:any; 
  appointmentForm: any = FormGroup;
  submitted = false; 
  constructor(private formBuilder: FormBuilder,private appoinement:appoinmentService,
    private router: Router
    
    
    ) { }

  ngOnInit(): void {
   
    this.appointmentForm= this.formBuilder.group({ 
      appoinmentDate: ['',Validators.required],
      email: ['',Validators.required],
      name: ['',Validators.required],
      userId: [],
      // DoctorId: []
  });
  }

  get appointmentFormControl() {
    return this.appointmentForm.controls;
  }

  submitting_Appointment(){
    this.successMsg = '';
    this.errorMsg = '';
 
  console.table(this.appointmentForm.value);
  let userId = localStorage.getItem("userId")
  let DoctorId = localStorage.getItem("DoctorId")
  let formdata = { 

    appoinmentDate:this.appointmentForm.value.appoinmentDate,
    email:this.appointmentForm.value.email,
    name:this.appointmentForm.value.name,
    userId:userId,
    DoctorId:DoctorId, 
  }
console.log('my form',formdata)
  this.appoinement.addappoinmentdata(formdata).subscribe(
    (res: any) => {
      console.log("heyyyy",res);
     
      this.successMsg = `Appointment Booked Successfully`;

      // this.successMsg = `Appointment Booked Successfully for ${appoinmentDate}`;
    },
    (err: any) => {
      console.log(err)
    
    })
  //  this.router.navigate(['/login'])

}
}
