import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { PreOrderService } from '../../pre-order.service';
import { products } from '../../product';
import { ProductInfo } from '../../interface/interface-template';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartService } from '../../cart.service';
const url = 'https://dabro-firebase-test-default-rtdb.firebaseio.com/customers';
const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};
export interface DialogData {
  name: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  tg: string | undefined;
}

@Component({
  selector: 'app-dialog-pre-order-dialog',
  templateUrl: './dialog-pre-order-dialog.component.html',
  styleUrls: ['./dialog-pre-order-dialog.component.scss']
})
export class DialogPreOrderDialogComponent implements OnInit {
  items = this.preOrderService.getItems();
  products = this.items;
  checkoutForm = this.formBuilder.group({
    name: '',
    email: '',
    tel: '',
    shipping: '',
    address: '',
    promo: '',
    payment: ''
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
              public dialog: MatDialog, private preOrderService: PreOrderService, private formBuilder: FormBuilder, private cartService: CartService, private http: HttpClient) {
  }


  ngOnInit(): void {
  }

  onSubmit(): void {
    this.insertSales();
    this.items = this.preOrderService.clearPreOrder();
    console.log('Ваш предзаказ был добавлен! Спасибо за заказ, с Вами свяжуться в ближайщее время.',
      this.checkoutForm.value, this.products);
    window.alert('Ваш предзаказ был добавлен! Спасибо за заказ, с Вами свяжуться в ближайщее время.')
    this.checkoutForm.reset();
  }

  insertSales(): void {
    const aboutCustomer: {} = {
      formCustomerPreOrder: this.checkoutForm.value,
      productPreOrder: this.products
    }
    this.http.post(`${url}.json`, aboutCustomer).subscribe(
      res => {
        console.log(res)
      }
    )
  }

  clearPreOrder(): void {
    this.items = this.preOrderService.clearPreOrder();
  }

  removeItem(product: ProductInfo): void {
    this.preOrderService.deleteFromPreOrder(product);
  }

}
