import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  type:string = "Men's Jewelry"

arr = [1,3,4,'venu', {name:'raju'}]

 number = 1234789
 reverseNum = (num:any)=>parseInt(String(num).split('').reverse().join(''));
 
 name = "kandukoori venu"
 reverseString = (strng:any)=>((strng).split('').reverse().join(''));

 string = 'Hello World! Welcome to Angular'
 reverseStng = (stg:any)=>(stg).split('').reverse().join('');

  constructor(private service:AdminService) { 
    // this.numReverse()
    // console.log(this.numReverse())
    // console.log('constructor calling...')
  }

  ngOnInit(): void {
    console.log('reversed num is '+this.reverseNum(this.number));
    console.log('reversed string is '+this.reverseString(this.name));
    console.log('reversed array is '+this.arr.reverse())
 
    this.reverseStrng();
    console.log(this.string)
    console.log(this.reverseStng(this.string))
    console.log(this.reverseStrng())

console.log((this.name).replace('venu', 'mahesh'))
console.log((this.name).replace(/(\w+)\s(\w+)/, '$2 $1'))
console.log((this.name).search(/i/i))




  }


  reverseStrng() {
    return this.string.split("").reverse().join("").split(" ").reverse().join(" ")
  }

  incertItem(e:any){
    console.log(e);
    this.service.postAlbum(e).subscribe(res=>{
      console.log(res);
      alert(res);
    })
    }
nuberFun(){
  return this.name
}

    // numReverse(){
    //   let revNum = 0
    //   while(this.number > 0) {
    //     revNum = revNum*10+this.number%10;
    //     this.number= this.number%10;
    //   }
    //   console.log(revNum)
    //   return revNum;
    // }


}
