import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

 myFullresImage= "assets/images/menR/mr (2)1.jpg";
  myThumbnail= "assets/images/menR/mr (2).jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
