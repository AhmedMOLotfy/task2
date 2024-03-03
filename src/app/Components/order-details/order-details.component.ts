import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/iproduct';
import { StaticDataService } from 'src/app/services/static-data.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  productId: number = 0;
  product: IProduct | undefined;

  constructor(private active: ActivatedRoute, private staticData: StaticDataService) {

  }

  ngOnInit(): void {
    this.productId = Number(this.active.snapshot.paramMap.get("ID"));
    this.getCurrentProduct();
  }

  getCurrentProduct() {
    this.product = this.staticData.getProductById(this.productId);
  }

}
