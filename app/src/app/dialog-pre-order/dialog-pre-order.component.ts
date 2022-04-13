import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogPreOrderDialogComponent } from './dialog-pre-order-dialog/dialog-pre-order-dialog.component';
import { FormBuilder } from '@angular/forms';
import { ProductInfo } from '../interface/interface-template';
import { products } from '../product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FavoriteService } from '../favorite.service';
import { PreOrderService } from '../pre-order.service';

export interface DialogData {
  name: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  tg: string | undefined;
  quantity: number | undefined;
}

@Component({
  selector: 'app-dialog-pre-order',
  templateUrl: './dialog-pre-order.component.html',
  styleUrls: ['./dialog-pre-order.component.scss']
})
export class DialogPreOrderComponent implements OnInit {
  // items = this.cartService.getItems();
  // products = this.items;
  product: any;
  products = products;

  checkoutForm = this.formBuilder.group({
    name: '',
    email: '',
    tel: '',
    shipping: '',
    address: '',
    promo: '',
    payment: ''
  });



  constructor(private route: ActivatedRoute, private _location: Location, private preOrderService: PreOrderService, private favoriteService: FavoriteService, public dialog: MatDialog, private formBuilder: FormBuilder) {
  }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogPreOrderDialogComponent, {
      width: '250px',
      // data: [{name: this.name, email: this.email, tg: this.tg}]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.email = result;
      // [{
      //   name: this.name,
      //   email: this.email,
      //   tg: this.tg
      // }] = result;
      console.log(result)
    });
  }


  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute);
  }

  // onSubmit(): void {
  //   this.items = this.cartService.clearCart();
  //   console.log('Ваш предзаказ был добавлен! Спасибо за заказ, с Вами свяжуться в ближайщее время.',
  //     this.checkoutForm.value, this.products);
  //   window.alert('Ваш предзаказ был добавлен! Спасибо за заказ, с Вами свяжуться в ближайщее время.')
  //   this.checkoutForm.reset();
  // }

  addToPreOrderList(product: ProductInfo | any) {
    this.preOrderService.addToPreOrderList(product);
    window.alert('Товар был добавлен в предзаказ');
  }

}
