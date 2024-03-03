import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/iproduct';
import { StaticDataService } from 'src/app/services/static-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnChanges {

  total: number = 0;

  // cat id
  @Input() sendCatName: string = "All";
  @Output() TotalPriceOut: EventEmitter<Number>

  // list of all products
  products: IProduct[];
  filteredList: IProduct[];

  constructor(private staticData: StaticDataService, private router: Router) {
    // all data from service
    this.products = staticData.getAllProducts();
    this.filteredList = this.products;


    this.TotalPriceOut = new EventEmitter();

  }

  ngOnChanges(): void {
    this.filteredList = this.getProByCat();
  }

  getProByCat() {
    return this.staticData.getProductByCat(this.sendCatName);
  }


  addToCart(qty: number, price: number) {
    this.total += qty * price;
    this.TotalPriceOut.emit(this.total);
  }

  deleteProduct(id: number) {
    this.staticData.deleteProductById(id);
  }

  gotoEditProduct(id: number) {
    this.router.navigate(['/editProduct', id]);
  }

  goToAdd() {
    this.router.navigate(['/addProduct']);
  }

}
