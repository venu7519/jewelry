
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { filter, Observable, Subscription } from 'rxjs';
import { DashboardComponent } from '../dashboard/dashboard.component';


@Component({ 
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit, OnDestroy{


  parentData=[1,2,3,4,5];
  
fromChild:any;

@ViewChild(DashboardComponent) dashBoard !: DashboardComponent

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent = new PageEvent;





  private mySubscription!: Subscription;

name = 'kandukoori'
revese = (stng:any)=>((stng).split('').reverse().join(''))
 

    
   obs = new Observable((obsrv)=>{
    obsrv.next("first");
    setTimeout(()=>{
      obsrv.next("second")
    },1000);
    setTimeout(()=>{obsrv.error('something went wrong')},2000); 
    obsrv.next('third')
    // obsrv.complete()
  })


  constructor() {
    console.log('reversed name is '+this.revese(this.name))

    
    }

  ngOnInit(): void {
    // promise
    const promise = new Promise(resolve =>{
      console.log('promise calling...')
      setTimeout(()=>{
        resolve('Promise working1');
        resolve('Promise working2');
        resolve('Promise working3');
        resolve('Promise working4');
      },1000)
      })
       
      promise.then(result => console.log(result));


   


      // observable
      //1&2. const observe = new Observable(sub=>{
      //   console.log('observable calling...')
      //   setTimeout(()=>{
      //     sub.next('Observable working1');
      //     sub.next('Observable working2');
      //     sub.next('Observable working3');
      //     sub.next('Observable working4');

      //   }, 1000);
      //   });

//1.   observe.subscribe(result => console.log(result));

//2.   observe.pipe(
//   filter(d=> d=== 'Observable working3'),
// ).subscribe(result => console.log(result));

// const observe = new Observable(sub=>{
//   console.log('observable call');
//   let counter = 0;
//   setInterval(()=>{
//     counter = counter +1;
//     sub.next(counter);
//   },1000);
// })

// this.mySubscription = observe.subscribe(result => console.log('Subscribe count '+result));





      }






getChildData(e:any){
  this.fromChild = e
}


     


 get(){
    this.obs.subscribe({
      next:(v)=> console.log(v),
      error:(e)=> console.log(e),
      complete:()=> console.info('completed')

    })
      }


      onInputChange(otpData:any){
        console.log(otpData)
        return otpData
      }
    
      verifyOtp(){
      }


      verifyEmail(){

      }







ngOnDestroy(){
    // this.mySubscription.unsubscribe();
          }






  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
}




















  

  
 


