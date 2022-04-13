import { Component, OnInit } from '@angular/core';
import { products } from '../product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  products: any = products;

  constructor() { }

  ngOnInit(): void {
  }

}
