import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome, faIdBadge } from '@fortawesome/free-solid-svg-icons';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css']
})
export class UserheaderComponent implements OnInit {
  
  faHome=faHome
  faIdBadge = faIdBadge

 public filteredString !:string;

  items:any=[]

  constructor(private router:Router, public dService: DataService) { }

  ngOnInit(): void {
  }

  searchItems(item:any){
    this.filteredString = (item.target as HTMLInputElement).value;
    console.log(this.filteredString);
    this.dService.search.next(this.filteredString)

  }

  loggedIn(){
    return sessionStorage.getItem('token');
  }
 
  logOut(){
  this.dService.logOut();
  }
}
