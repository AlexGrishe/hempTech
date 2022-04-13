import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-seeds-cards',
  templateUrl: './seeds-cards.component.html',
  styleUrls: ['./seeds-cards.component.scss']
})
export class SeedsCardsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigate(path: any) {
    this.router.navigate([{outlets: {primary: path, sidemenuseeds: path}}],
      {relativeTo: this.route});
  }
}
