import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {


  
  d:string= new Date().toLocaleTimeString();

  timeid = setInterval(() => {
   this.d = new Date().toLocaleTimeString()
  },1000)

  constructor() {
}

  ngOnInit(): void {
  }

}
