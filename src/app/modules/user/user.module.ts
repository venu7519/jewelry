import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ItemsComponent } from './items/items.component';
import { NecklaceComponent } from './necklace/necklace.component';
import { RingsComponent } from './rings/rings.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { CartComponent } from './cart/cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    UserComponent,
    ItemsComponent,
    NecklaceComponent,
    RingsComponent,
    UserhomeComponent,
    UserheaderComponent,
    CartComponent,
    FilterPipe,
  
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FontAwesomeModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    

  ]
})
export class UserModule { }
