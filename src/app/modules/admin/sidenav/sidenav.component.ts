import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
 
data:any= { name:'venu', data:{grade:[{ Id: 12}]}}

rdata = [{id :22}]

  a=[1,2,1,2,3,1,4,2]
  even:number[]=[]
  odd:number[]=[]
  b:number[]=[]
  c:number[]=[]
  d:number[]=[]
v:number[] = []

name =[{uName:'venu',grade:'A1'}, {uName:'raju',grade:'A2'}, {uName:'venu',grade:'A3'}, {uName:'venu',grade:'A1'}]
w:any = []
  constructor() {

console.log(this.rdata);
console.log(this.rdata.findIndex(id => id.id == 22));
console.log(this.rdata[0].id)

    for(let i=0; i<this.a.length; i++){
            if(this.a[i] == 1){
              this.b.push(this.a[i])
            }
          }
          console.log(this.b)
        
          for(let i=0; i<this.a.length;i++){
            if(this.a[i]%2 == 0) {
            this.even.push(this.a[i])
             }
             else{
              this.odd.push(this.a[i])
             } 
          }
          console.log(this.odd)
          console.log(this.even)
        
            for(let i=0; i<this.a.length; i++){
          if(this.a[i]%2==0 && this.c.indexOf(this.a[i]) == -1){
            this.c.push(this.a[i])
          }
          if(this.a[i]%2==1 && this.d.indexOf(this.a[i]) == -1){
            this.d.push(this.a[i])
          }
        }
        console.log(this.d)
        console.log(this.c)
        
        let evenSum = 0;
          for (let j = 0; j < this.even.length; j++) {
             evenSum += this.even[j]
          }
          console.log(evenSum)

          
        let oddSum=0;
        for (let k=0; k<this.odd.length;k++){
          oddSum += this.odd[k]
        }
        console.log(oddSum)
      
   
  }

  ngOnInit(): void {
    console.log(this.a)
    console.log(this.a.indexOf(4));
    console.log((this.a).join());  //console.log(String(this.a).split(',').join())
    // console.log((this.a).toString());  //console.log(String((this.a)))

    console.log(String(this.a).split(','))
    console.log((this.a).join('')); //console.log(String((this.a).join('')))
    console.log((this.a).slice(1, 2))  

    for(let i=0; i<this.a.length; i++){
      if(this.v.indexOf(this.a[i])==-1){
        this.v.push(this.a[i])
      }
    }
console.log('numbers duplicates removed '+this.v);

for(let i=0; i<this.name.length; i++){
  if(this.w.indexOf(this.name[i].uName)==-1){
    this.w.push(this.name[i].uName)
  }
}
console.log('names duplicates removed '+this.w)
console.log((this.name))
  }

}


