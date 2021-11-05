import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: any = FormGroup;
  submitted = false; 
  constructor(private auth :AuthService,private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({ 
      username: ['',Validators.required],

      name: ['',Validators.required],
    
      password: ['',Validators.required],
      
      
  });
  }
  get registerFormControl() {
    return this.signUpForm.controls;
  }

register(){

  console.table(this.signUpForm.value)
  this.auth.registerpatients(this.signUpForm.value).subscribe(
    (res: any) => {
     
      console.log("heyyyy",localStorage.setItem('userId', res));
    },
    (err: any) => {
      console.log(err)
    
    })
    
    this.router.navigate(['/signin'])
    
  }

  

}
