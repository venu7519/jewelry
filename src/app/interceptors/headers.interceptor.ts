import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor(private dService:DataService, private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("interceptor calling")
    if(sessionStorage.getItem('token')){
      const token:any = sessionStorage.getItem('token');
      console.log(token)
      request = request.clone({  
      setHeaders: {  
        'Content-Type':  'application/json',
        'Authorization':  'token',
        'token': JSON.parse(token)
      } 
  }); 
}
   return next.handle(request)
    .pipe(catchError(err=>{
      if(err.status === 401){
        alert('Session Expired - please Login again')
        this.dService.logOut();
        this.router.navigate(['/login']);
      }
      const error = new Error('some error catched by interceptors') || err.statusText;
      return throwError(()=>error);
    }))












    //  .pipe(catchError(err=>{
    //   console.log(err)
    //   if(err){
    //     alert('something went wrong!')
    //     // this.dService.logOut();
    //     // this.router.navigate(['/login']);
    //   }
    //   return throwError(err)
    // }))

    // .pipe(
    //   tap(e=> {
    //     if( e instanceof HttpResponse){ 
    //       console.log(e)
          
    //     }}
    //     ),
    //     )





  }
}
 // .pipe(catchError(err=>{
    //   if(err.status === 401){
    //     this.dService.logOut();
    //     this.router.navigate(['/login']);
    //   }
    //   const error = err.error.message || err.statusText;
    //   return throwError(error);
    // }))