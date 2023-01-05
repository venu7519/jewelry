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


  items:any=[]

  constructor(private router:Router, public dService: DataService) { }

  ngOnInit(): void {
  }
  loggedIn(){
    return sessionStorage.getItem('token');
  }
 
  logOut(){
  this.dService.logOut();
  }
}
