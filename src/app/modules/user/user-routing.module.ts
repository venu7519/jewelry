import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ItemsComponent } from './items/items.component';
import { NecklaceComponent } from './necklace/necklace.component';
import { RingsComponent } from './rings/rings.component';
import { UserComponent } from './user.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { UserhomeComponent } from './userhome/userhome.component';

const routes: Routes = [
  {path:'', redirectTo:'all_items', pathMatch:'full' },
  {path:'', component:UserComponent,
children:[
  {path:'user/home', component:UserhomeComponent},
  {path:'user/header', component:UserheaderComponent},
  {path:'all_items', component:ItemsComponent},
  {path:'necklace', component:NecklaceComponent},
  {path:'rings', component:RingsComponent},
  {path:'cart', component:CartComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
