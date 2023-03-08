import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  @Input() childD:any;
 
  @Output() customEvent = new EventEmitter();
  msg = 'Hello From child'



  orders:any = []

  constructor(private service:AdminService) {
    service.getAllCustomers().subscribe(res=>{
      console.log(res);
      this.orders = res;
    })

   }

  ngOnInit(): void {
    
  }

passToParent(){
  this.customEvent.emit(this.msg)
}




  
}
