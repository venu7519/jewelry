import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-necklace',
  templateUrl: './necklace.component.html',
  styleUrls: ['./necklace.component.css']
})
export class NecklaceComponent implements OnInit {

 


  nlData:any=[];
  items:any=[];
// token = sessionStorage.getItem('token')

  constructor(private dService:DataService, private router:Router) {
    if(sessionStorage.getItem('token')){
      console.log(sessionStorage.getItem('token'))
    dService.getNdata().subscribe(res=>{
      console.log(res);
  this.nlData = res;
    })
  console.log(this.nlData)

  }
  }


    ngOnInit(): void {
      console.log('ngOnInit called')

      }
     
    
  
    logOut(){
  this.router.navigate(['/home'])
    }
  
addToCart(n:any){
    console.log(n);
    this.dService.addtoCart(n).subscribe(res=>{
    console.log(res);
    if(res == 'already added'){
       alert(res)
     }
     else{
       this.dService.cartList.push(res)
     }
    
})
}




  

  }