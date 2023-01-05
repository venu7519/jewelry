import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private dService:DataService, private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request);
    // .pipe(catchError(err=>{
    //   if(err.status === 401){
    //     this.dService.logOut();
    //     this.router.navigate(['/login']);
    //   }
    //   const error = err.error.message || err.statusText;
    //   return throwError(error);
    // }))
  }
}
