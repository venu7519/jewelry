import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, observable, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 nData = {'_id':123, 'name':'raju', 'code':'12vb8' }
 
// cartList:any=[];
public cartList = new BehaviorSubject<any>([])

productList = new BehaviorSubject<any>([]);

public search = new BehaviorSubject<string>("");

session:any = sessionStorage.getItem("userId")?.toString();

constructor(private http:HttpClient, private router:Router) { }
  getData() {
    console.log('getData() called');
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  postData() {
    return this.http.post('https://jsonplaceholder.typicode.com/posts',{
      title: 'foo',
      body: 'bar',
      userId: 1
    });
  }

    putData(){
      return this.http.put('https://jsonplaceholder.typicode.com/posts/1', {
      id: 2,
      title: 'footer',
      body: 'bar',
      userId: 210,
    });
  }

  deleteData(){
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1', {
      
    }
    )
  }
 
  usersData(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');

  }

  pstData(){
    console.log();
  
     return this.http.get('https://jsonplaceholder.typicode.com/posts' )
  }

  postFormData(form:any) {    
console.log(form)
    return this.http.post('http://localhost:3000/registration/1',form);
  }

  getFormData() {
    console.log('getFormData() called');
    return this.http.get('http://localhost:3000/registration/2');
  }
  deleteFormData(uName:any){
    console.log(uName)
    return this.http.delete('http://localhost:3000/deldata/'+uName);
    // this.router.navigate(['/footer'], { queryParams:{id}})

  }
  // users/' +id +'/posts'

  // getLoginData(logIn:any) {    
  //   console.log(logIn)
//       return this.http.get('http://localhost:3000/login',logIn);
  //     }

postLoginData(data:string){
        console.log(data);
        return this.http.post('http://localhost:3000/login', data);
      //   .pipe(map(user=>{
      //     console.log(user)
      //     sessionStorage.setItem("currentUser", JSON.stringify(user));
      //   }))
       }

  // ptData(){
  //   console.log();
  
  //    return this.http.get('https://jsonplaceholder.typicode.com/users/5/posts' )
  // }

  ptData(id:any){
    console.log(id);
  
     return this.http.get('https://jsonplaceholder.typicode.com/users/' +id +'/posts' )
  }

  getNdata(){
    const token:any = sessionStorage.getItem('token');
    console.log(token)
    // const httpOptions = {

    //   headers: new HttpHeaders({
 
    //    'Content-Type':  'application/json',
    //    'Authorization':  'token',
    //    'token': JSON.parse(token)
 
    //   })};
    // , httpOptions
      console.log(token)
    return this.http.get('http://localhost:3000/jewelry/necklace')
  }

 getMRdata(){
  // const token = sessionStorage.getItem('token')
  // console.log(token)
  // const headers = new HttpHeaders({
  //   'Content-Type':  'application/json',
  //   'Authorization':  'token'
    // 'token': JSON.parse(token)
  // })
    return this.http.get("http://localhost:3000/jewelry/men/rings")
  }

  // add(product:any){
  //   this.products.push(product);
  // }
 
// removeItem(item:any){
//   for(let i=0; i<this.products.length;i++){
//   if(item.id === this.products[i].id){
//     console.log(this.products[i].id)
//     console.log(item.id)
//     this.products.splice(i,1);
//   }
//    console.log(item.title)
// console.log(this.products.id)
   
//     console.log(item)
//     console.log(this.products)
//     console.log(this.products.value)
// }
// }


// getAssociados(idClube: string): any {
//   const token = localStorage.getItem('token');
//   const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token });
//   const options = new RequestOptions({ headers: headers });
//   return this.http.get(this.associadoUrl + idClube, options)
//      .map(res => res.json());
// }





addtoCart(data:object){
  data = JSON.parse(JSON.stringify(data).split('"_id":').join('"uId":'));
  console.log(data)
  const userDetails:any = sessionStorage.getItem("email");
  Object.assign(data, {email:JSON.parse(userDetails)})   
  console.log(data)
  return this.http.post('http://localhost:3000/jewelry/cart/1', data )

}

getItem() : Observable <any>{
   const userDetails:any = sessionStorage.getItem("email");
   console.log(userDetails);
  return this.http.get('http://localhost:3000/jewelry/cart/2/'+JSON.parse(userDetails))

}

removeItem(item:any){
  console.log(item)
  const userDetails:any = sessionStorage.getItem("email");
  return this.http.delete('http://localhost:3000/jewelry/cart/remove/id/'+item+'/email/'+JSON.parse(userDetails))
}

orderCartItems(cItems:any){

console.log(cItems)
return this.http.post('http://localhost:3000/cart/orders', cItems)
}

getSessionData(){
 let s:any = sessionStorage.getItem("userName")
//  console.log(s)
 return JSON.parse(s);
}

logOut(){
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('email');
  // sessionStorage.removeItem('email');
  this.router.navigate(['/home'])
}

emptyCart(){
  const userDetails:any = sessionStorage.getItem("email");
  return this.http.delete('http://localhost:3000/emptycart/email/'+JSON.parse(userDetails))

}


// adtoCart(nData:any){
//   nData = JSON.parse(JSON.stringify(nData).split('"_id":').join('"id":'));
//   console.log(nData)
  
// }










}

 // const userToken:any = sessionStorage.getItem('token')
  // const headers = { body : data, token :JSON.parse(userToken)};
  // console.log(headers)
  // Object.assign(data, {token:JSON.parse(userDetails)._id})




//  const headers = { '_id': item, 'email':JSON.parse(userDetails)._id};
//   console.log(headers)

// let movie2 = Object.assign({}, movie1, { episode: 8 });


// getItems(){
//   return this.itemsList.asObservable();
// }
// addToCart(item:any){
//   this.cartItemList.push(item);
//   this.itemsList.next(this.cartItemList);
//   this.getTotalprice();
//   console.log(this.cartItemList);

// }
// getTotalprice(){
//   let  grandTotal=0;
//   this.cartItemList.map((a:any)=>{
//     grandTotal +=a.total;
//   })
//   return grandTotal;
// }
// removeItem(product:any){
//   this.cartItemList.map((a:any, index:any)=>{
//     if(product.id===a.id){
//     this.cartItemList.splice(index,1);
//     }
//   })
//   this.itemsList.next(this.cartItemList);
// }
// removeAllCart(){
//   this.cartItemList=[];
//   this.itemsList.next(this.cartItemList);
// }


























