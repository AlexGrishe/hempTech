import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from '../../../../product';

@Component({
  selector: 'app-lighting-cards',
  templateUrl: './lighting-cards.component.html',
  styleUrls: ['./lighting-cards.component.scss']
})
export class LightingCardsComponent implements OnInit {
products = products;

  constructor(private router: Router, private route: ActivatedRoute) { }

  navigate(path: any) {
    this.router.navigate([{outlets: {primary: path, sidemenulighting: path}}],
      {relativeTo: this.route});
  }

  ngOnInit(): void {
  }

}
