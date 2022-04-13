import { Component, EventEmitter, Input, OnInit, Output, Pipe } from '@angular/core';
import { category } from './category';
import { CartService } from './cart.service';
import { ProductInfo } from './interface/interface-template';
import { Subject, Subscription } from 'rxjs';
import { FavoriteService } from './favorite.service';
import { MatBadgeModule } from '@angular/material/badge';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';
import { ProductService } from './product.service';
import { products } from './product';
import { ProductsSearchPipe } from './products-search.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Hemp&Technologies';
  category: any = category;
  total: number | any;
  cartSubscription: Subscription | any;
  items = this.cartService.getItems();
  itemsFv = this.favoriteService.getItems();
  products = this.items;
  prodSr: any[] | undefined;
  term$ = new Subject<string>();
  editedPhone = false;
  searchV: '' | any;
  productsSearch = products;
  @Input() showSearch: boolean | undefined;
  @Output() onHideSearch = new EventEmitter<boolean>();

  constructor(private cartService: CartService, private favoriteService: FavoriteService, private productService: ProductService) {
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotal();
    this.cartSubscription = this.cartService.itemsChanged.subscribe(
      (products: ProductInfo[]) => {
        this.items = products;
        this.total = this.cartService.getTotal();
      }
    );
  }

  onCloseSearch() {
   return this.searchV = '';
  }


  closeWindowPhone() {
    if (!this.editedPhone) {
      this.editedPhone = true;
    } else if (this.editedPhone) {
      this.editedPhone = false;
    }
  }

}



