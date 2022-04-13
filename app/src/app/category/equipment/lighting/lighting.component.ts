import { Component, OnInit } from '@angular/core';
import { products } from '../../../product';

@Component({
  selector: 'app-lighting',
  templateUrl: './lighting.component.html',
  styleUrls: ['./lighting.component.scss']
})
export class LightingComponent implements OnInit {
  products = products;

  // share() {
  //   window.alert('Продукт был опубликован!')
  // }

  onNotify() {
    window.alert('Вы получите уведомление когда товар поступит в продажу');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
