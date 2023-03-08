import { Component, OnInit, ViewChild } from '@angular/core';
import { NecklaceComponent } from '../necklace/necklace.component';


@Component({
  selector: 'app-men-rings',
  templateUrl: './men-rings.component.html',
  styleUrls: ['./men-rings.component.css']
})
export class MenRingsComponent implements OnInit {

@ViewChild(NecklaceComponent) necklace:any

child = ''

constructor() {



 
}
ngOnInit(): void {
 
}

getChild(){
  this.child = this.necklace.cData
}


    
}





