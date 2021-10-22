import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm :any = FormGroup;
  submitted = false;
  tokenParam:any;
  constructor(private fb:FormBuilder,private router: Router,private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
 
   username: ['', Validators.required],
   password: ['', [Validators.required]],
 },
 
 );

}




Login() {

 this.authService.login(this.loginForm.value).subscribe((data)=>{
     this.tokenParam = data;

     if(this.tokenParam.accessToken)
     {
   
    
       this.router.navigate(['/home'])
     }

     
 }, (err:any) => {
   console.log(err)
  
 })
 

}


}
