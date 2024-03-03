import { Injectable } from '@angular/core';
import { IProduct, products } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {

  productList: IProduct[];
  filteredList: IProduct[];

  constructor() {
    this.productList = products;
    this.filteredList = products;
  }

  getAllProducts() {
    return this.productList;
  }

  getProductByCat(cat: string): IProduct[] {
    if (cat == "All") {
      return this.filteredList;
    }
    else {
      return this.productList.filter(p => p.category == cat);
    }
  }

  getProductById(id: number): IProduct | undefined {
    return this.productList.find(p => p.id === id);
  }

  deleteProductById(id: number): void {
    let product = this.productList.find(p => p.id === id);
    let index = this.productList.indexOf(product as IProduct);
    this.productList.splice(index, 1);
  }

  editProduct(id: number, pro: IProduct) {
    let product = this.productList.find(p => p.id === id);
    product = pro;
  }

}
