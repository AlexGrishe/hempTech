import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nutrition-cards',
  templateUrl: './nutrition-cards.component.html',
  styleUrls: ['./nutrition-cards.component.scss']
})
export class NutritionCardsComponent {

  constructor(private router: Router, private route: ActivatedRoute) { }

  navigate(path: any) {
    this.router.navigate([{outlets: {primary: path, sidemenunutrition: path}}],
      {relativeTo: this.route});
  }

}
