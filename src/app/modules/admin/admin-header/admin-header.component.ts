import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  @Output() toggleSideNavForMe: EventEmitter<any> = new EventEmitter();
// admin = sessionStorage.getItem('userName')

  constructor(public dataService:DataService) { }

  ngOnInit(): void {
  }

  toggleSidenav(){
    this.toggleSideNavForMe.emit();
  }


  loggedIn(){
    return sessionStorage.getItem('token');
  }


  logOut(){
    this.dataService.logOut()
  }


}
