import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { ProductAvaiabilityService } from '../../product-avaiability.service';
import { CartService } from '../../cart.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  selector: 'app-dialog-product-availability-dialog',
  templateUrl: './dialog-product-availability-dialog.component.html',
  styleUrls: ['./dialog-product-availability-dialog.component.scss']
})
export class DialogProductAvailabilityDialogComponent implements OnInit {
  items = this.productAvailabilityService.getItems();
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
              public dialog: MatDialog, private productAvailabilityService: ProductAvaiabilityService, private formBuilder: FormBuilder, private cartService: CartService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.insertSales();
    this.items = this.productAvailabilityService.clearPreOrder();
    console.log('Как только товар появится в наличии мы Вам сообщим! был добавлен! Спасибо за заказ, с Вами свяжуться в ближайщее время.',
      this.checkoutForm.value, this.products);
    window.alert('Ваш предзаказ был добавлен! Спасибо за заказ, с Вами свяжуться в ближайщее время.')
    this.checkoutForm.reset();
  }

  insertSales(): void {
    const aboutCustomer: {} = {
      formCustomerAvailability: this.checkoutForm.value,
      productAvailability: this.products
    }
    this.http.post(`${url}.json`, aboutCustomer).subscribe(
      res => {
        console.log(res)
      }
    )
  }

}
