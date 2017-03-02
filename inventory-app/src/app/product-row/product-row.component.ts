import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-row',
  inputs: ['product'],
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
  product: Product;
  constructor() { }

  ngOnInit() {
  }

}

