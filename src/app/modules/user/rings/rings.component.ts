import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-rings',
  templateUrl: './rings.component.html',
  styleUrls: ['./rings.component.css']
})
export class RingsComponent implements OnInit {
  mrData:any=[];
  items:any=[];

  cartRef:any=[]
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
      this.cartRef = res
       this.dService.cartList = this.cartRef.length
     }
    
})
}


}
