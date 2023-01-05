import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  nlData:any=[];
  items:any=[];
 
  myFullresImage= "assets/images/menR/mr (2)1.jpg";
  myThumbnail= "assets/images/menR/mr (2).jpg";

constructor(private dService:DataService, private router:Router) {
//   dService.getNdata().subscribe(res=>{
//     console.log(res);
// this.nlData = res;
//   })
// console.log(this.nlData)


}
  ngOnInit(): void {
    
  }




 
}
