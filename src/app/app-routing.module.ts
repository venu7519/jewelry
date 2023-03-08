import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { componentPath } from './enums/componentPaths.enum';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenRingsComponent } from './men-rings/men-rings.component';
import { NecklaceComponent } from './necklace/necklace.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { StudentComponent } from './student/student.component';
import { TableComponent } from './table/table.component'

const routes: Routes = [
  {path:'admin',  canActivate:[AuthGuard],
  loadChildren:()=> import('./modules/admin/admin.module').then(module=>module.AdminModule)},

  {path:'user', canActivate:[AuthGuard],
loadChildren:()=> import('./modules/user/user.module').then(module=>module.UserModule)},


  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path: componentPath.footer, component: FooterComponent},
{path: componentPath.login, component: LoginComponent},
{path: 'student', component: StudentComponent},
{path: 'register', component: RegisterComponent},
{path: 'table', component: TableComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
