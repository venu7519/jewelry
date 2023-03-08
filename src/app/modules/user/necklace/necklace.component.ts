import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-necklace',
  templateUrl: './necklace.component.html',
  styleUrls: ['./necklace.component.css']
})
export class NecklaceComponent implements OnInit {

  nlData:any=[];
  items:any=[];

  cartRef:any = []

  searchKey:string='';
// token = sessionStorage.getItem('token')

  constructor(private dService:DataService, private router:Router) {
    if(sessionStorage.getItem('token')){
      console.log(sessionStorage.getItem('token'))
    dService.getNdata().subscribe(res=>{
      console.log(res);
  this.nlData = res;
    })
  console.log(this.nlData)

  }
  }


    ngOnInit(): void {
      console.log('ngOnInit called');

      this.dService.search.subscribe(val=>{
        console.log(val);
        this.searchKey = val
      })


      
      }
     
    addToCart(n:any){
    console.log(n);
    this.dService.addtoCart(n).subscribe(res=>{
    console.log(res);
    if(res == 'already added'){
       alert(res)
     }
     if(res == "added to cart"){
      this.cartRef.push('a')
       this.dService.cartList = this.cartRef.length
     }
     console.log(JSON.stringify(res))
    })

    console.log(this.cartRef)
      console.log(this.cartRef.length)
  }

}
