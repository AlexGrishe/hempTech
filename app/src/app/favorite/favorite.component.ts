import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';
import { ProductInfo } from '../interface/interface-template';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  total: number | any;
  cartSubscription: Subscription | any;
  itemsFv = this.favoriteService.getItems();

  constructor( private favoriteService: FavoriteService, private formBuilder: FormBuilder, private cartService: CartService,) { }

  ngOnInit(): void {
    this.itemsFv = this.favoriteService.getItems();
    this.total = this.favoriteService.getTotal();
    this.cartSubscription = this.favoriteService.itemsChanged.subscribe(
      (products: ProductInfo[]) => {
        this.itemsFv = products;
        this.total = this.favoriteService.getTotal();
      }
    );
  }


  clearFavorite(): void {
    this.itemsFv = this.favoriteService.clearFavorite();
  }

  removeItem(product: ProductInfo) {
    this.favoriteService.deleteFromCart(product);
  }

  addToCart(product: ProductInfo) {
    this.cartService.addToCart(product);
    window.alert('Товар был перемещен');
    this.favoriteService.deleteFromCart(product);
  }

}
