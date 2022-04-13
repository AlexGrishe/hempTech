import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';
import { products } from '../product';
import { ProductInfo } from '../interface/interface-template';
import { identifierName } from '@angular/compiler';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';

const url = 'https://dabro-firebase-test-default-rtdb.firebaseio.com/customers';
const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  total: number | any;
  cartSubscription: Subscription | any;
  items = this.cartService.getItems();
  products = this.items;
  checkoutForm = this.formBuilder.group({
    name: '',
    email: '',
    tel: '',
    messenger: '',
    shipping: '',
    address: '',
    promo: '',
    payment: ''
  });

  constructor(private cartService: CartService, private formBuilder: FormBuilder, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotal();
    this.cartSubscription = this.cartService.itemsChanged.subscribe(
      (products: ProductInfo[]) => {
        this.items = products;
        this.total = this.cartService.getTotal();
      }
    );
    // this.insertSales();
  }

  onSubmit(): void {
    this.insertSales();
    this.items = this.cartService.clearCart();
    console.log('Ваш заказ был добавлен! Спасибо за заказ, с Вами свяжуться в ближайщее время.',
      this.checkoutForm.value, this.products);
    window.alert('Ваш заказ был добавлен! Спасибо за заказ, с Вами свяжуться в ближайщее время.')
    this.checkoutForm.reset();
    this.cartService.itemsChanged.emit(this.items.slice());
  }

  insertSales(): void {
    const aboutCustomer: {} = {
      formCustomer: this.checkoutForm.value,
      saleCustomer: this.products
    }
    this.http.post(`${url}.json`, aboutCustomer).subscribe(
      res => {
        console.log(res)
      }
    )
  }

  clearCart(): void {
    this.items = this.cartService.clearCart();
  }

  removeItem(event: any, product: ProductInfo) {
    event.preventDefault();
    event.stopPropagation();
    this.cartService.deleteFromCart(product);
  }

  add(product: ProductInfo) {
    return this.cartService.addFromCart(product);
  }

  public increaseAmount(product: ProductInfo) {
    this.cartService.updateItemAmount(product, product.amount + 1);
  }

  public decreaseAmount(product: ProductInfo) {
    const newAmount = product.amount === 1 ? 1 : product.amount - 1;
    this.cartService.updateItemAmount(product, newAmount);
  }

  public checkoutAmount(product: ProductInfo) {
    this.cartService.updateItemAmount(
      product,
      product.amount < 1 || !product.amount || isNaN(product.amount) ? 1 : product.amount);
  }

}
