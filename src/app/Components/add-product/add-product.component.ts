import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct, products } from 'src/app/interfaces/iproduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  newPrd: IProduct = {} as IProduct;

  constructor(private router: Router) {
  }

  Addprd() {
    console.log(this.newPrd);
    this.newPrd.images = ["https://cdn.dummyjson.com/product-images/1/2.jpg"]
    products.push(this.newPrd);
    this.router.navigate(['/home'])
  }

}
