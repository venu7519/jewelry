import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AlbumsComponent } from './albums/albums.component';
import { CustomersComponent } from './customers/customers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';

AdminComponent
const routes: Routes = [
  {path:'', redirectTo:'dashboard/home', pathMatch:'full' },
  {path:'', component:AdminComponent,
  children:[
  {path:'dashboard/home', component:DashboardComponent},
  {path:'customers', component:CustomersComponent},
  {path:'orders', component:OrdersComponent},
  {path:'albums', component:AlbumsComponent},
  ]

}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
