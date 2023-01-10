import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  type = "Men's Jewelry"

  constructor(private service:AdminService) { }

  ngOnInit(): void {
  }

  incertItem(e:any){
    console.log(e);
    this.service.postAlbum(e).subscribe(res=>{
      console.log(res);
      alert(res);
    })
    }

}
