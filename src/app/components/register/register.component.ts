import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { FormGroup, AbstractControl, Validators, ValidationErrors, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signUpForm: any = FormGroup;
  submitted = false; 
  constructor(private auth :AuthService,private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
  
    
    this.signUpForm = this.formBuilder.group({ 
      username: ['',Validators.required],
      title: ['',Validators.required],
      name: ['',Validators.required],
      location: ['',Validators.required],
      password: ['',Validators.required],
      phonenumber :[''],
      yearsOfex :[''],
      Qualification :[''],
  });
  }


  get registerFormControl() {
    return this.signUpForm.controls;
  }

register(){

  console.table(this.signUpForm.value)
  this.auth.registerUser(this.signUpForm.value).subscribe(
    (res: any) => {
      //  localStorage.setItem('DoctorId', res);
      console.log("heyyyy",res);
     
    },
    (err: any) => {
      console.log(err)
    
    })
    this.router.navigate(['/login'])
   
  }

  





}
