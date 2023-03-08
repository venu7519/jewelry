import { Token } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {  faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../data.service';
import { HeaderComponent } from '../header/header.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
fData:any=[]
  uData:any=[];
  
  emailTable:any=[];
  
  rForm:FormGroup;

  faEye=faEye
  faEyeSlash=faEyeSlash

gForm:FormGroup;

  showpassword=false;

  otp:any=[]

  constructor(private dataService:DataService, private router:Router, private fb:FormBuilder){
  //   dataService.getLoginData('').subscribe(res=>{
  //     console.log(res);
  //    this.uData = res;
  //    console.log(this.uData.value)
  //   });

  // console.log(this.uData);

this.gForm = fb.group({
  name : ['', [Validators.required, Validators.minLength(3)]],
  password : ['', [Validators.required, Validators.minLength(8)]]
})







  this.rForm = fb.group({
    name : ['',[Validators.required, Validators.minLength(4)]],
    mobileNumber: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]]
  });
 





   }

ngOnInit(): void {

}



toggleShow(){
  this.showpassword = !this.showpassword
}

login(data:any){
  console.log(data)
  console.log(data.email);
    this.dataService.postLoginData(data).subscribe((res:any)=>{
      console.log(res)
      console.log(res.token)
      console.log(res.email)
      if(res.email === "venuk@gmail.com"){
        sessionStorage.setItem("token", JSON.stringify(res.token))
        sessionStorage.setItem("email", JSON.stringify(res.email))
        sessionStorage.setItem("userName", JSON.stringify(res.userName))
         alert('Admin Login Successfull')
        
         this.router.navigate(['/admin'])
      }
       else if(res.email == data.email){
       sessionStorage.setItem("token", JSON.stringify(res.token))
       sessionStorage.setItem("email", JSON.stringify(res.email))
       sessionStorage.setItem("userName", JSON.stringify(res.userName))
        alert('Login Successfull')
       
        this.router.navigate(['/user'])
      }
      else if(res == "invalid username or password"){
        alert('Invalid email or password')
      }
    
      })
      
        // this.router.navigate(['/'])
  }


show(){
  console.log(this.gForm)
  console.log(this.gForm.value)
}


get getControls(){
  return this.gForm.controls;
}




  // doDelete(uName:any){
  //   console.log(uName)
  //   this.dataService.deleteFormData(uName).subscribe(res=>{
  //     this.fData=res;
  //   })
 
  // }  

  get getControl(){
    return this.rForm.controls;
  }




  submitRform(){
    console.log(this.rForm)
  this.emailTable.push(this.rForm.value)
    console.log('called submitReactiveForm');
    console.log( this.rForm.value );
    console.log( this.rForm.valid );
  }
    
  // onInputChange(otpData:any){
  //   console.log(otpData)
  //   return otpData
  // }

  // verifyOtp(){
  // }




}













 