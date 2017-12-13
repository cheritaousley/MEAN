import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css']
})
export class ProductCreationComponent implements OnInit {
  product = new Product();
  // product = {
  //   title: " ",
  //   price: " ",

  // }
  onSubmit() {
    this.product = new Product();
  }
  constructor() { }

  ngOnInit() {
  }

}
