import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faHome, faIdBadge, faTachographDigital } from '@fortawesome/free-solid-svg-icons';
import { CartComponent } from '../cart/cart.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faHome=faHome
  faIdBadge = faIdBadge


  items:any=[]


  constructor(private router:Router, public dService: DataService) {

      //  router.events.subscribe((val)=>{
      //   if(val instanceof NavigationEnd){
      //   if(val.url == '/jewelry/all_items'){
      //      this.showLog=false;
      //   }
      // }
      //  })

  
   }

  ngOnInit(): void {

    
  }
  

  loggedIn(){
    return sessionStorage.getItem('token');
  }



  
  logOut(){
  this.dService.logOut();
  }

  
}

//  showM(){
//   // this.appearM();
//   return this.show=true;
  
//  }
// appearM(){
// return this.appear=false;
// }



// disappear(){
//   return this.appear=true;
// }









// @Input() newD:any[]=[];

// @Input() pData:any[]=[];

// @Input() oneData:any[]=[];
// @Input()twoData:any[]=[];
// @Input()threeData:any[]=[];
// @Input()fourData:any[]=[];
// @Input()fiveData:any[]=[];
// @Input()sixData:any[]=[];
// @Input()sevenData:any[]=[];
// @Input()eightData:any[]=[];
// @Input()nineData:any[]=[];
// @Input()tenData:any[]=[]; 
// @Input() pDetails:any= '';

// @Input() nDetails:string='';

// @Output() cEvent = new EventEmitter()

// @Output() dEvent= new EventEmitter()

// @Output() mEvent= new EventEmitter()
//  msg='from child'
//  updateMsg(e:any){
// this.msg = e.target.value
//  }
//  passtoParent(){
//   this.cEvent.emit(this.msg)  
//  }

// data = 'this is from child'
// eData:string="";

// sendToParent(){
//   this.data = this.eData
// }

// what:string="";
// updateValue(b:any){
// this.what = b
// }


//  inFo:any="";
//  AssignToParent(){
//   this.dEvent.emit(this.inFo)
//  }
// xData:any= "Demo of ViewChild Decorator";
// toParent(){
//   return this.xData;
// }
