import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { appoinmentService } from 'src/app/service/appoinment.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  apointment:any;
  app:any;

 loginForm :any = FormGroup;
  submitted = false;
  tokenParam:any;
  appdetails:any


  arrrayAppointment:any =[];
  constructor(private fb:FormBuilder,private router: Router,
    private authService: AuthService,
    private appoinementservice:appoinmentService
 ) { }

  ngOnInit(): void {
       this.loginForm = this.fb.group({
    
      username: ['', Validators.required],
      password: ['', [Validators.required]],
    },
    
    );




    // this.appoinementservice.getdallappoinments(this.appdetails).subscribe(
    //   (res: any) => {
    //     this.apointment=res


    //     for(let item of res)
    //     {
    //       if(item.DoctorId === '616fd4d91507a0c29fc6e04c')
    //       {
    //         this.arrrayAppointment.push(item);
    //       }
    //     }
    //     console.log("doctors",this.arrrayAppointment);

    //   },
      
      // (err: any) => {
      //   console.log(err)
      
      // })


  }


Login(){

    this.authService.login(this.loginForm.value).subscribe((data)=>{
        this.tokenParam = data;

        if(this.tokenParam.accessToken)
        {
      
       
          // this.router.navigate(['/appoinmentlist'])
        }

        
    }, (err:any) => {
      console.log(err)
     
    })
    
  
}





}
