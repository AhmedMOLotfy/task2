import { Component } from '@angular/core';

interface ICategory {
  id: number,
  name: string
}

@Component({
  selector: 'app-master-order',
  templateUrl: './master-order.component.html',
  styleUrls: ['./master-order.component.css']
})
export class MasterOrderComponent {
  catList: ICategory[];
  cartPrice: number = 0;
  selectedId: string = "All";

  // smartphones, fragrances, skincare, groceries, home-decoration
  constructor(){
    this.catList  = [
      {
        id: 0,
        name: 'All'
      },
      {
        id: 1,
        name: 'smartphones'
      },
      {
        id: 2,
        name: 'laptops'
      },
      {
        id: 3,
        name: 'fragrances'
      },
      {
        id: 5,
        name: 'groceries'
      },
      {
        id: 6,
        name: 'home-decoration'
      },
    ];
  }

  onBuy(data: any){
    this.cartPrice = data;
  }

}
