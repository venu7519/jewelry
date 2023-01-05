import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  sideNavOpen = true
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  sideNavToggler(){
this.sideNavOpen = !this.sideNavOpen;
  }

  loggedIn(){
    return sessionStorage.getItem('token');
  }


  logOut(){
    this.dataService.logOut()
  }


}
