import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

cartItemList:any=[];
productList= new BehaviorSubject<any>([])

  constructor() { }

// getProducts(){
//     return this.productList.asObservable();
// }
// addToCart(product:any){
//   this.cartItemList.push(...product);
//   this.productList.next(product);
//   this.getTotalPrice();
//   console.log(this.cartItemList);
// }
// getTotalPrice(){
//   let grandTotal=0;
//   this.cartItemList.map((a:any)=>{
//     grandTotal += a.total;
//   })
//   return grandTotal;
// }
// removeCartItem(product:any){
//   this.cartItemList.map((a:any,index:any)=>{
//     if(product.id===a.id){
//       this.cartItemList.splice(index,1);
//     }
//     this.productList.next(this.cartItemList);
//   })
// }
// removeAllCart(){
//   this.cartItemList=[];
//   this.productList.next(this.cartItemList);
// }



}
