import { Component, ViewEncapsulation } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title ="waynu";
  // even = [ 'venuk', 'venuk', 'venuk', 'rahul', 'rahul', 'balu', 'balu' ]

  //  a=[1,2,1,2,3,1,4,2]
  //  c:number[]=[]

show = true

  constructor(){

    if(sessionStorage.getItem('email')  === "venuk@gmail.com"){
       this.show = false
    }
    

// for(let i=0; i<this.even.length; i++){
//             if(this.even[i]== this.even[i+1]){
//             this.even.splice(i,1)
//           }
//           }
//           console.log(this.even)


//           for(let i=0; i<this.a.length; i++){
//                 if(this.a[i]%2==0 && this.c.indexOf(this.a[i]) == -1){
//                   this.c.push(this.a[i])
//                 }


//         }

    
  }

  loggedIn(){
    if(sessionStorage.getItem('email')  === "venuk@gmail.com"){
     }
     return true;
}
 
}
 

