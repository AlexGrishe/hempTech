import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-side-menu-nutrition',
  templateUrl: './side-menu-nutrition.component.html',
  styleUrls: ['./side-menu-nutrition.component.scss']
})
export class SideMenuNutritionComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute) {

    route.params.subscribe(params => console.log('Параметр инедтенфикатора бокового меню', params['id']));

  }

  ngOnInit(): void {
  }

}
