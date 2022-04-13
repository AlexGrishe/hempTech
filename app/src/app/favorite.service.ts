import { EventEmitter, Injectable } from '@angular/core';
import { ProductInfo } from './interface/interface-template';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  itemsCount: ProductInfo['amount'];
  itemsFv: ProductInfo[] = [];
  public itemsChanged: EventEmitter<ProductInfo[]> = new EventEmitter<ProductInfo[]>();

  constructor() { }

  addToFavorite(product: ProductInfo) {
    this.itemsFv.push(product);
  }

  deleteFromCart(product: ProductInfo) {
    const index = this.itemsFv.indexOf(product);
    this.itemsFv.splice(index, 1);
  }

  getItems() {
    return this.itemsFv;
  }

  clearFavorite() {
    this.itemsFv = [];
    return this.itemsFv;
  }

  public updateItemAmount(product: ProductInfo, newAmount: number) {
    this.itemsFv.forEach((productInfo) => {
      if (productInfo.id === product.id) {
        productInfo.amount = newAmount;
      }
    });
    this.itemsChanged.emit(this.itemsFv.slice());
    // alert('Обновили количество: ' + product.name);
  }

  public getTotal() {
    let total = 0;
    this.itemsFv.forEach((productInfo) => {
      total += productInfo.amount * productInfo.costPrice;
    });
    return total;
  }
}
