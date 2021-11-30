import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppoinmentComponent } from './components/appoinment/appoinment.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { DoctorprofileComponent } from './components/doctorprofile/doctorprofile.component';
import { SigninComponent } from './patients/signin/signin.component';
import { SignupComponent } from './patients/signup/signup.component';
import { AppoinmentlistComponent } from './components/appoinmentlist/appoinmentlist.component';
import { HeaderComponent } from './default/header/header.component';
import { UpdateprofileComponent } from './components/updateprofile/updateprofile.component';

const routes: Routes = [


 

//   {path:'header', component:HeaderComponent, 
  
//   children: [

//      {path:'home', component:HomeComponent,},
//      {path:'profile', component:ProfileComponent},
//   ],

// },

  
  
  
  
{path:'head', component:HeaderComponent, pathMatch: 'full'},

{path:'home', component:HomeComponent, pathMatch: 'full'},
{path:'profile', component:ProfileComponent, pathMatch: 'full'},
      {path:'signin', component:SigninComponent, pathMatch: 'full'},
      {path:'signup', component:SignupComponent, pathMatch: 'full'},
      {path:'appoinment', component:AppoinmentComponent, pathMatch: 'full'},
    

  {path:'updateprofile', component: UpdateprofileComponent, pathMatch: 'full'} ,
  {path:'Appoinmentlist', component:AppoinmentlistComponent, pathMatch: 'full'},
  {path: '', redirectTo: 'landing', pathMatch: 'full'},
  {path:'landing',component:LandingComponent, pathMatch: 'full'},
  

  {path:'doctor/show/:id',component: DoctorprofileComponent, pathMatch: 'full'} ,
  {path:'register', component:RegisterComponent, pathMatch: 'full'},
  {path:'login', component:LoginComponent, pathMatch: 'full'},

  {path: '**', redirectTo: '', pathMatch: 'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
