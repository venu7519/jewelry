import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-men-rings',
  templateUrl: './men-rings.component.html',
  styleUrls: ['./men-rings.component.css']
})
export class MenRingsComponent implements OnInit {

  mrData:any=[];
  items:any=[];

constructor(private dService:DataService, private router:Router) {
  
  dService.getMRdata().subscribe(res=>{
    console.log(res);
this.mrData = res;
  })
console.log(this.mrData)
  
}
ngOnInit(): void {
 
}


addToCart(n:any){
  console.log(n)
  this.dService.addtoCart(n).subscribe(res=>{
    console.log(res);
    if(res == 'already added'){
       alert(res)
     }
     else{
      //  this.dService.cartList.next(res)
     }
    
})
}




}



