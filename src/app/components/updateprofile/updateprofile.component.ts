import { HttpErrorResponse, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup ,FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Doctor } from 'src/app/interfaces/doctor.interface';
import { AuthService } from 'src/app/service/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { doctorsService } from 'src/app/service/doctors.service';

export interface File {
  data: any;
  progress: number;
  inProgress: boolean;
}

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {
  // @ViewChild("fileUpload", { static: false })
  // fileUpload!: ElementRef;
  @ViewChild("fileUpload", {static: false}) fileUpload!: ElementRef;files = [];
  DoctorId :any;

  doctor: Doctor = {
    name: '',
    title: '',
    location: '',
    yearsOfex: 0,
    phonenumber: 0,
    Qualification: '',
    username: '',
    profileImage: ''
  };
    name: any;
    title: any;
    location: any;
    yearsOfex: any;
    phonenumber: any;
    Qualification: any;
    username: any;
    profileImage: any;

  token:any;

 
  decodedToken:any;
  isExpired:any;



  form:any = FormGroup;

  file: File = {
    data: null,
    inProgress: false,
    progress: 0
  };

  userId :any;
 
  constructor(private authservice:AuthService, private activatedRoute: ActivatedRoute,private router :Router,private doc:doctorsService,  private formBuilder: FormBuilder,) { }

  ngOnInit(): void {


    // this.rating=5;

    this.token = localStorage.getItem("blog-token")
    if(!this.token)
    {
       this.router.navigate(['']);
    }


    const helper = new JwtHelperService();

     this.decodedToken = helper.decodeToken(this.token);
   
     
    console.log("Hey decoded",this.decodedToken);
    console.log("Hey userid ",this.decodedToken.user._id);
    
    this.username=this.decodedToken.username;
    this.title=this.decodedToken.title;
    this.name=this.decodedToken.name;
    this.location=this.decodedToken.location;
    this.yearsOfex=this.decodedToken.yearsOfex;
    this.userId=this.decodedToken.user._id
   //  this.image=this.decodedToken.stars;


   //  0
 //Other functions
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









    this.form = this.formBuilder.group({
      id: [{value: null, disabled: true}, [Validators.required]],
      name: [null, [Validators.required]],
      username: [null, [Validators.required]],
      profileImage: [null]
    });




    this.DoctorId = localStorage.getItem("DoctorId")
      this.doc.update(this.DoctorId)
        .subscribe(
          res => {
            console.log("update me here ",res);
         
        
          },
          err => console.log(err)
        )
        
    
    


      
  }

  onClick() {
    const fileInput = this.fileUpload.nativeElement;
    fileInput.click();

    fileInput.onchange = () => {

      this.file = {

        data: fileInput.files[0],

        inProgress: false,
        progress: 0
      };

    console.log("myfile", this.file )
    console.log("file name", this.file.data.name )

      this.fileUpload.nativeElement.value = '';
      this.uploadFile();
    }
  }



  uploadFile( ) {

  this.token = localStorage.getItem("blog-token")
  const helper = new JwtHelperService();
  this.decodedToken = helper.decodeToken(this.token);

    const formData = new FormData();
    
    formData.append('file', this.file.data);

    console.log("file here",this.file.data)

    console.log("file name", this.file.data.name )
    

    this.file.inProgress = true;
    this.userId = this.decodedToken.user._id;
    console.log('informations',formData)
    this.authservice.uploadProfileImage(formData, this.userId).pipe(
      map((event) => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            this.file.progress = Math.round(event.loaded * 100 / event.total);
            break;
          case HttpEventType.Response:
            return event;
        }
      }),
      catchError((error: HttpErrorResponse) => {
        this.file.inProgress = false;
        return of('Upload failed');
      })).subscribe((event: any) => {
        if(typeof (event) === 'object') {
          this.form.patchValue({profileImage: event.body.profileImage});
        }
      })


  }

  update() {
    console.table(this.form.value)
    this.doc.update(this.form.value).subscribe(
      (res: any) => {
       
        console.log("update profile",res);
       
      },
      (err: any) => {
        console.log(err)
      
      })
  }


}
