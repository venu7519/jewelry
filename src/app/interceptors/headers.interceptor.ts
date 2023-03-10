import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
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
    //  .pipe(catchError(err=>{
    //   if(err.status === 401){
    //     this.dService.logOut();
    //     this.router.navigate(['/login']);
    //   }
    //   const error = err.error.message || err.statusText;
    //   return throwError(err)
    // }))
  }
}
