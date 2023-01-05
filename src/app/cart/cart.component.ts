import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

@Output() kart =new EventEmitter();



  items:any=[];

  constructor(private router: Router, private dService:DataService) {
    dService.getItem().subscribe(res=>{
      console.log(res)
      this.items=res
      this.dService.cartList = res;
    })
    console.log(this.items)
    // console.log(this.items.data)
   }

  ngOnInit(): void {
    
  }

removeItem(item:any){
console.log(item)
this.dService.removeItem(item).subscribe(res=>{
  console.log(res)
  this.items=res;
  this.dService.cartList = res;
});
}

orderItems(){
  let cItems = this.items
  console.log(cItems)
this.dService.orderCartItems(cItems).subscribe(res=>{
  console.log(res)
})
alert('Ordered Successfully!')
this.emptyCart();
}

emptyCart(){
  this.dService.emptyCart().subscribe(res=>{
    console.log(res)
    this.items=res
    this.dService.cartList = []
  })
  
}



}












