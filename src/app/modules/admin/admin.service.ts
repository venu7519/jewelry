import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient, private router:Router) { }

getCustomerOrdersData(id:any){
  return this.http.get('http://localhost:3000/customer/info/'+id)
}

getAllCustomers(){
  return this.http.get('http://localhost:3000/all/customers')
}

postAlbum(item:any){
  console.log(item)
return this.http.post('http://localhost:3000/admin/album', item)
}

getAlbum(): Observable <any>{
return this.http.get('http://localhost:3000/admin/designs')
}

// getAllOrders(){
//   return this.http.get('http://localhost:3000/all/orders')
// }


}
