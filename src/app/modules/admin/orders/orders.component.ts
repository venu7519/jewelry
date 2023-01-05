import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders:any = []

  constructor(private service:AdminService) {
    service.getAllCustomers().subscribe(res=>{
      console.log(res);
      this.orders = res;
    })

   }

  ngOnInit(): void {
  }

}
