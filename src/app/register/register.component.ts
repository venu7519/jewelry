 import { DeclarationListEmitMode } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router, TitleStrategy } from '@angular/router';
import { DataService } from '../data.service';
import { componentPath } from '../enums/componentPaths.enum';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  // fData:any=[]
//   uData:any=[];
// regData:any=[]
//   rForm:FormGroup;

  constructor(private dataService:DataService, private router:Router) {
          

  //   this.dataService.getFormData().subscribe(res=>{
  //     console.log(res);
  //    this.fData = res;
  //    console.log(this.fData.value)
  //   });

  // console.log(this.fData);
  }

ngOnInit(): void {}

register(form:any){
  console.log(form)
    this.dataService.postFormData(form).subscribe(res=>{
      console.log(res)
      if(res == 'registered'){
        alert('Successfully registered')
        this.router.navigate(['/'+componentPath.login])
      }
      else{
        alert('Email is already exist try with another')
      }
    
        })
        console.log(form.value)
        form.reset()
  }





  // private router:Router
// show(){
//   this.regData.push(this.rForm.value)
//   console.log(this.rForm.value)
// }




// submitReactiveForm(){
// this.emailTable.push(this.userRegistationReactiveForm.value)
//   console.log('called submitReactiveForm');
//   console.log( this.userRegistationReactiveForm.value );
//   console.log( this.userRegistationReactiveForm.valid );
// }


































}

// userDetails:any = {name:'',mobileNumber:'',gender:''};
// userData = [{name:'Manohar',mobileNumber:'86786689798',gender:'male'},{name:'venu',mobileNumber:'97678607687',gender:'male'}]
// gender='male';
// dataTable:any[]=[]
// emailTable:any[]=[]
// userRegistationReactiveForm:FormGroup;
// deleted:any[]=[]

// constructor(private fb:FormBuilder) {
//   this.userRegistationReactiveForm = fb.group({
//     name : ['Mr/Ms:',[Validators.required]],
//     mobileNumber: ['',[Validators.required]]
//   });
 
// }

//  ngOnInit(): void {
  
//  }

// submit(form:any){
//   console.log(form)
// }


//  doSubmit(formValues:any){
//    this.dataTable.push(formValues)
//   console.log(formValues);

//   console.log(this.dataTable)
// }

// submitReactiveForm(){
// this.emailTable.push(this.userRegistationReactiveForm.value)
//   console.log('called submitReactiveForm');
//   console.log( this.userRegistationReactiveForm.value );
//   console.log( this.userRegistationReactiveForm.valid );
// }

// console.log('doSubmit called');


// receiveData(userData:any) {
// console.log(userData);
// this.userRegistationReactiveForm.setValue({
//   name:userData.name,
//   mobileNumber:userData.mobileNumber
// })
// }

