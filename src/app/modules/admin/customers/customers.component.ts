
import { Component, OnInit, OnDestroy } from '@angular/core';
import { filter, Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit, OnDestroy{


  private mySubscription!: Subscription;

 

    
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

const observe = new Observable(sub=>{
  console.log('observable call');
  let counter = 0;
  setInterval(()=>{
    counter = counter +1;
    sub.next(counter);
  },1000);
})

this.mySubscription = observe.subscribe(result => console.log('Subscribe count '+result));

      }


 get(){
    this.obs.subscribe(
          data =>{ console.log(data)},
          error =>{ console.log(error)},
          ()=>{console.log('completed')}
        )

      }


ngOnDestroy(){
    this.mySubscription.unsubscribe();
          }


  }

  
 


