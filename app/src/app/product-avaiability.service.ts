import { Injectable } from '@angular/core';
import { ProductInfo } from './interface/interface-template';

@Injectable({
  providedIn: 'root'
})
// переименовать сервис
export class ProductAvaiabilityService {
  items: ProductInfo[] = [];

  constructor() { }

  addToProductAvailabilityList(product: ProductInfo) {
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
