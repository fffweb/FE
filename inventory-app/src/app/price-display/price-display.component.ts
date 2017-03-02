import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'price-display',
  inputs: ['price'],
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.css']
})
export class PriceDisplayComponent implements OnInit {
  price: Number;

  constructor() { }

  ngOnInit() {
  }

}
