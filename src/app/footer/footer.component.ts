import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

@Input() newData:any='';

// newD:any= [];
// id:any=[]
// constructor(private dataService:DataService, private route: ActivatedRoute) { }

//   ngOnInit(): void {
// //     this.route.queryParamMap.subscribe(params => {
// //       console.log(params.get('id')) 
// //       this.id = params.get('id');
// //     }); // output: 
// // this.doPass(this.id)
// //     console.log(this.id)
//   }  


//   // doPass (id:any){
//   //   console.log(id)
//   //     this.dataService.ptData(id).subscribe(res=>{
//   //       console.log(res)
//   //           this.newD = res;
//   //         })
//   //   }



//   }


  //  rForm:FormGroup;
deleted:any[]=[]
emailTable:any[]=[]
nlData:any=[];

constructor(private fb:FormBuilder, private dataservice:DataService) {
//   dataservice.getNdata().subscribe(res=>{
//     console.log(res);
// this.nlData = res;
//   })
// console.log(this.nlData)


// dataService.getFormData().subscribe(res=>{
//   console.log(res);
//  this.fData = res;
//  console.log(this.fData.value)
// });

// console.log(this.fData.userName);






  // this.rForm = fb.group({
  //   name : ['',[Validators.required, Validators.minLength(4)]],
  //   mobileNumber: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]]
  // });
 
}

 ngOnInit(): void {
  
 }

// submit(form:any){
//   console.log(form)
// }

// get getControl(){
//   return this.rForm.controls;
// }

// onSubmit(){
//   console.log(this.rForm);
// }

// }


//  doSubmit(formValues:any){
//    this.dataTable.push(formValues)
//   console.log(formValues);

//   console.log(this.dataTable)
// }

// submitRform(){
//   console.log(this.rForm)
// this.emailTable.push(this.rForm.value)
//   console.log('called submitReactiveForm');
//   console.log( this.rForm.value );
//   console.log( this.rForm.valid );
// }

// console.log('doSubmit called');
// receiveData(userData:any) {
// console.log(userData);
// this.userRegistationReactiveForm.setValue({
//   name:userData.name,
//   mobileNumber:userData.mobileNumber
// })
// }

  
}

