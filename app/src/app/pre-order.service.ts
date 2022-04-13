import { Injectable } from '@angular/core';
import { ProductInfo } from './interface/interface-template';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PreOrderService {
  items: ProductInfo[] = [];

  constructor(private http: HttpClient) {
  }

  addToPreOrderList(product: ProductInfo) {
    this.items.push(product);
  }

  deleteFromPreOrder(product: ProductInfo) {
    // @ts-ignore
    this.items.splice(product, 1);
  }

  getItems() {
    return this.items;
  }

  clearPreOrder() {
    this.items = [];
    return this.items;
  }
}
