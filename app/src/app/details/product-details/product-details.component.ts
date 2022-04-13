import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../product';
import { Location } from '@angular/common';
import { CartService } from '../../cart.service';
import { ProductInfo } from '../../interface/interface-template';
import { FavoriteService } from '../../favorite.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  products = products;
  editedCh = false;
  editedRw = false;
  editedDs = false;
  // selectedImageIndex: any;
  // currentIndex: any = -1;
  // showFlag: any = false;
  // carouselFull: any | null;
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1200/500`);


  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private _location: Location, private cartService: CartService, private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute);
  }

  // getImage(id: string): Observable<Blob> {
  //   return this.httpClient.get('http://localhost:4200/products/'+id, {responseType: "blob"});
  // }
  closeWindowCh() {
    if (!this.editedCh) {
      this.editedCh = true;
    } else if (this.editedCh) {
      this.editedCh = false;
    }
  }

  closeWindowRw() {
    if (!this.editedRw) {
      this.editedRw = true;
    } else if (this.editedRw) {
      this.editedRw = false;
    }
  }

  closeWindowDs() {
    if (!this.editedDs) {
      this.editedDs = true;
    } else if (this.editedDs) {
      this.editedDs = false;
    }
  }

  goToProducts() {
    this._location.back();
  }

  addToCart(product: ProductInfo) {
    this.cartService.addToCart(product);
    window.alert('Товар был добавлен в коризну!')
  }

  addToFavorite(product: ProductInfo) {
    this.favoriteService.addToFavorite(product);
    window.alert('Товар был добавлен в избраное')
  }

  // showLightbox(index: any) {
  //   this.currentIndex = index;
  //   this.showFlag = true;
  // }
  //
  // closeEventHandler() {
  //   this.showFlag = false;
  //   this.currentIndex = -1;
  // }
  //
  //
  // imageObject: Array<object> = [{
  //   image: `http://localhost:4200/assets/photo/${webkitURL}_3.jpg`,
  //   thumbImage: `http://localhost:4200/assets/photo/${webkitURL}_3.jpg`,
  //   title: 'Hummingbirds are amazing creatures'
  // }, {
  //   image: 'http://localhost:4200/assets/photo/x1pro_3.jpg',
  //   thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg'
  // }, {
  //   video: 'https://youtu.be/tYa6OLQHrEc',
  //   posterImage: 'https://img.youtube.com/vi/tYa6OLQHrEc/hqdefault.jpg',
  //   title: 'Youtube example one with title.'
  // }, {
  //   image: this.products,
  //   // thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
  //   title: 'Most beautiful birds in the world flying.'
  // }];

  openImg() {

    let carouselFull = document.getElementById('about-product__carousel');
    // @ts-ignore
    carouselFull.style.width = '100%';
    // @ts-ignore
    carouselFull.style.height = '800px';

    let aboutProduct = document.getElementById('about_product');
    // @ts-ignore
    aboutProduct.style.display = 'block';

    let ngbSlide1 = document.getElementById('ngbSlide1');
    // @ts-ignore
    ngbSlide1.style.height = '790px';
    let ngbSlide2 = document.getElementById('ngbSlide2');
    // @ts-ignore
    ngbSlide2.style.height = '790px';
    let ngbSlide3 = document.getElementById('ngbSlide3');
    // @ts-ignore
    ngbSlide3.style.height = '790px';

  }

  closeImg() {
    let carouselFull = document.getElementById('about-product__carousel');
    // @ts-ignore
    carouselFull.style.width = '100%';
    // @ts-ignore
    carouselFull.style.height = '400px';
    let aboutProduct = document.getElementById('about_product');
    // @ts-ignore
    aboutProduct.style.display = 'grid';
    let ngbSlide1 = document.getElementById('ngbSlide1');
    // @ts-ignore
    ngbSlide1.style.height = '390px';
    let ngbSlide2 = document.getElementById('ngbSlide2');
    // @ts-ignore
    ngbSlide2.style.height = '390px';
    let ngbSlide3 = document.getElementById('ngbSlide3');
    // @ts-ignore
    ngbSlide3.style.height = '390px';
  }

  // goToCharacteristic(): void {
  //
  // }

}
