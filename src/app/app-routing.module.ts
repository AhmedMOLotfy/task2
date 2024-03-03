import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterOrderComponent } from './Components/master-order/master-order.component';
import { OrderDetailsComponent } from './Components/order-details/order-details.component';
import { UsersComponent } from './Components/DynamicUsers/users/users.component';
import { SingleUserComponent } from './Components/DynamicUsers/single-user/single-user.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { EditFormComponent } from './Components/edit-form/edit-form.component';
import { AddFormReactiveComponent } from './Components/add-form-reactive/add-form-reactive.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MasterOrderComponent },
  { path: 'product/:ID', component: OrderDetailsComponent },
  { path: 'allUsers', component: UsersComponent },
  { path: 'user/:id', component: SingleUserComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'editProduct/:id', component: EditFormComponent },
  { path: 'addUser', component: AddFormReactiveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
