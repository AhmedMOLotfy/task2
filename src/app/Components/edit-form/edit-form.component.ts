import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/iproduct';
import { StaticDataService } from 'src/app/services/static-data.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  id: number = 0;
  product: IProduct | undefined;

  constructor(private active: ActivatedRoute, private staticData: StaticDataService, private router: Router) {

  }

  ngOnInit(): void {
    this.id = Number(this.active.snapshot.paramMap.get("id"));
    this.product = this.staticData.getProductById(this.id);
  }

  editProduct() {
    this.staticData.editProduct(this.id, this.product as IProduct);
    this.router.navigate(['/home']);
  }





}
