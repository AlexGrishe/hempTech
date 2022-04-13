import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { category } from '../category';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  category = category;

  constructor(private router: Router,private route: ActivatedRoute) {

    route.params.subscribe(params => console.log('Параметр инедтенфикатора бокового меню', params['id']));

  }

  ngOnInit(): void {
  }

}
