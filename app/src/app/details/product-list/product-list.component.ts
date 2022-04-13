import { Component, OnInit } from '@angular/core';
import { products } from '../../product';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { CartService } from '../../cart.service';
import { FavoriteService } from '../../favorite.service';
import { ProductInfo } from '../../interface/interface-template';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  product: any;
  filteredCards = products.sort(() => .5 - Math.random()).slice(0,8);

  // share() {
  //   window.alert('Продукт был опубликован!')
  // }

  onNotify() {
    window.alert('Вы получите уведомление когда товар поступит в продажу');
  }

  constructor( private route: ActivatedRoute, private _location: Location, private cartService: CartService, private favoriteService: FavoriteService) { }

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


}
