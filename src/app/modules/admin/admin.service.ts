import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient, private router:Router) {   }

getCustomerOrdersData(id:any){
  return this.http.get('http://localhost:3000/customer/info/'+id)
}

getAllCustomers(){
  return this.http.get('http://localhost:3000/all/customers')
}

// getAllOrders(){
//   return this.http.get('http://localhost:3000/all/orders')
// }


}
