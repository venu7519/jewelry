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




  constructor() { }

  ngOnInit(): void {
  }

  loggedIn(){
    return sessionStorage.getItem('token');
  }

}
