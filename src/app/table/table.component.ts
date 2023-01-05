import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() dataTable:any[]=[]
  @Output() passData = new EventEmitter();

fData:any=[]
  uData:any=[];

items:any=[];
allUsers:any=[];

show=false;
  
  constructor(private dataService:DataService, private router:Router) {
    // adminService.getAllCustomers().subscribe(res=>{
    //   console.log(res);
    //   this.allUsers= res
    // })





  //   dataService.getFormData().subscribe(res=>{
  //     console.log(res);
  //    this.fData = res;
  //    console.log(this.fData.value)
  //   });

  // console.log(this.fData.userName);
    }

  ngOnInit(): void {
  }
  
  doEdit(value:any){
    console.log(value);
    this.passData.emit(value);
  }

  doDelete(uName:any){
    console.log(uName)
    this.dataService.deleteFormData(uName).subscribe(res=>{
      this.fData=res;
    })
 
  }  

//   getInfo(info:any){
// this.adminService.getCustomerOrdersData(info).subscribe(res=>{
//   console.log(res)
//   this.items = res
//   return this.show = true;
// })
// this.router.navigate(['/user/info'])
//   }
  

  showHide(){
    return this.show = false;
  }

 
}





