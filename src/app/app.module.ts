import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './Components/product/product.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ShadowDirective } from './directives/shadow.directive';
import { MasterOrderComponent } from './Components/master-order/master-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderDetailsComponent } from './Components/order-details/order-details.component';
import { UsersComponent } from './Components/DynamicUsers/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleUserComponent } from './Components/DynamicUsers/single-user/single-user.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { EditFormComponent } from './Components/edit-form/edit-form.component';
import { AddFormReactiveComponent } from './Components/add-form-reactive/add-form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    ShadowDirective,
    MasterOrderComponent,
    OrderDetailsComponent,
    UsersComponent,
    SingleUserComponent,
    AddProductComponent,
    EditFormComponent,
    AddFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
