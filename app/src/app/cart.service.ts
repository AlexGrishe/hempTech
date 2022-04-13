import { EventEmitter, Injectable } from '@angular/core';
import { ProductInfo } from './interface/interface-template';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { products } from './product';
import { Subject } from 'rxjs';
import { CartItem } from './cart/cart-item.model';

const url = 'https://dabro-firebase-test-default-rtdb.firebaseio.com/customers';
const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemsCount: ProductInfo['amount'];
  items: ProductInfo[] = [];
  public itemsChanged: EventEmitter<ProductInfo[]> = new EventEmitter<ProductInfo[]>();

  constructor(private http: HttpClient) {
  }

  addToCart2(product: ProductInfo) {
    this.items.push(product);
  }

  getItemIds() {
    return this.getItems().map(productInfo => productInfo.id);
  }

  addToCart(product: ProductInfo) {
    if (this.getItemIds().includes(product.id)) {
      this.items.forEach(function (productInfo) {
        if (productInfo.id === product.id) {
          productInfo.amount += product.amount;
        }
      })
    } else {
      this.items.push(product);
    }
    this.itemsChanged.emit(this.items.slice());
  }

  addItems(products: ProductInfo[]) {
    products.forEach((productInfo) => {
      this.addToCart2(productInfo);
    })
  }

  deleteFromCart(product: ProductInfo) {
    const index = this.items.findIndex(element => element === product);
    this.items.splice(index, 1);
    this.itemsChanged.emit(this.items.slice());
  }

  addFromCart(product: ProductInfo) {
    this.items.push(product);
  }

  showLength() {
    console.log(this.items.length);
    return this.items.length;
  }

  getItems() {
    return this.items.slice();
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  public updateItemAmount(product: ProductInfo, newAmount: number) {
    this.items.forEach((productInfo) => {
      if (productInfo.id === product.id) {
        productInfo.amount = newAmount;
      }
    });
    this.itemsChanged.emit(this.items.slice());
    // alert('Обновили количество: ' + product.name);
  }

  public getTotal() {
    let total = 0;
    this.items.forEach((productInfo) => {
      total += productInfo.amount * productInfo.costPrice;
    });
    return total;
  }

}
