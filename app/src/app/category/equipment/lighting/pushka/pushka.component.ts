import { Component, OnInit } from '@angular/core';
import { products } from '../../../../product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CartService } from '../../../../cart.service';
import { FavoriteService } from '../../../../favorite.service';
import { ProductInfo } from '../../../../interface/interface-template';
import { ProductAvaiabilityService } from '../../../../product-avaiability.service';
import { PreOrderService } from '../../../../pre-order.service';

@Component({
  selector: 'app-pushka',
  templateUrl: './pushka.component.html',
  styleUrls: ['./pushka.component.scss']
})
export class PushkaComponent implements OnInit {
  product: any;
  products = products;

  // share() {
  //   window.alert('Продукт был опубликован!')
  // }

  onNotify() {
    window.alert('Вы получите уведомление когда товар поступит в продажу');
  }

  constructor(private route: ActivatedRoute, private _location: Location, private cartService: CartService, private favoriteService: FavoriteService, private productAvailabilityService: ProductAvaiabilityService, private preOrderService: PreOrderService) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product: ProductInfo | any) {
    this.cartService.addToCart(product);
    window.alert('Товар был добавлен в коризну!')
  }

  addToFavorite(product: ProductInfo | any) {
    this.favoriteService.addToFavorite(product);
    window.alert('Товар был добавлен в избраное')
  }

  addToProductAvailability(product: ProductInfo | any) {
    this.productAvailabilityService.addToProductAvailabilityList(product);
    window.alert('Оформите заявку на уведомление!')
  }

  addToPreOrderList(product: ProductInfo | any) {
    this.preOrderService.addToPreOrderList(product);
    window.alert('Оформит заявку на предзаказ!')
  }
}
