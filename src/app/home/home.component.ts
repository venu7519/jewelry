import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{faHome}from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

faHome=faHome

show = false;

openPopup(){
  this.show=true;
}
closePopup(){
  this.show=false;
}

rdata = [{id :22}]


  constructor() {
    console.log(this.rdata);
console.log(this.rdata.findIndex(id => id.id == 22));
console.log(this.rdata[0].id)
   }

  ngOnInit(): void {
  }

  loggedIn(){
    return sessionStorage.getItem('token');
  }

}
