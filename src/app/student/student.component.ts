import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup } from '@angular/forms';
import { Router, UrlHandlingStrategy } from '@angular/router';
import { DataService } from '../data.service';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  

  // @ViewChild(FooterComponent)
  // footerComponent!: FooterComponent;

vData=[];
  centralData:any;

  venu:any[]=[];
waynu:any[]=[]
  
nums=['v','e','n','u',1,9,9,7]

uData:any=[];

newD:any = []



  constructor(private dataService:DataService, private router:Router) { 
    
    dataService.getData().subscribe(res=>{
      console.log(res);
    });
    
    dataService.postData().subscribe(res=>{
      console.log(res);
    });

    dataService.putData().subscribe(res=>{
      console.log(res);
    });

    dataService.usersData().subscribe(res=>{
      console.log(res);
     this.uData = res;
     console.log(this.uData.value)
    });

  console.log(this.uData);

  dataService.pstData().subscribe(res=>{
    console.log(res);
    this.newD = res;
    console.log(this.newD.value)
  })



    for(let i=0; i<100; i++){
if(i < 100){
  this.venu.push('venukandukoori')
  
    }
  } 
  console.log(this.venu)
   

  

  }

  ngOnInit(): void {}
    

  startVenu(){
    this.waynu = this.venu;

  }

//   doPost(e:any){
//     this.newD = e
//  }

doPost(id:any){
  console.log(id);
  this.router.navigate(['/footer'], { queryParams:{id}})

  // this.footerComponent.doPass(id)

//  this.dataService.pstData(id).subscribe(res=>{
//   console.log(res);
//   this.newD = res;
//   console.log(this.newD)
// })
 }

 

}
