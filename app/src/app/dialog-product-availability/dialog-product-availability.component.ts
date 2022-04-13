import { Component, OnInit } from '@angular/core';
import { products } from '../product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PreOrderService } from '../pre-order.service';
import { FavoriteService } from '../favorite.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { DialogPreOrderDialogComponent } from '../dialog-pre-order/dialog-pre-order-dialog/dialog-pre-order-dialog.component';
import { ProductInfo } from '../interface/interface-template';
import { ProductAvaiabilityService } from '../product-avaiability.service';
import { DialogProductAvailabilityDialogComponent } from './dialog-product-availability-dialog/dialog-product-availability-dialog.component';

export interface DialogData {
  name: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  tg: string | undefined;
  quantity: number | undefined;
}

@Component({
  selector: 'app-dialog-product-availability',
  templateUrl: './dialog-product-availability.component.html',
  styleUrls: ['./dialog-product-availability.component.scss']
})
export class DialogProductAvailabilityComponent implements OnInit {
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

  constructor(private route: ActivatedRoute, private _location: Location, private productAvailabilityService: ProductAvaiabilityService, private favoriteService: FavoriteService, public dialog: MatDialog, private formBuilder: FormBuilder) { }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogProductAvailabilityDialogComponent, {
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

  addToProductAvailability(product: ProductInfo | any) {
    this.productAvailabilityService.addToProductAvailabilityList(product);
    window.alert('Оформите заявку пожалуйста');
  }

}
