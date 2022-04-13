import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-partners-cards',
  templateUrl: './partners-cards.component.html',
  styleUrls: ['./partners-cards.component.scss']
})
export class PartnersCardsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigate(path: any) {
    this.router.navigate([{outlets: {primary: path, sidemenupartners: path}}],
      {relativeTo: this.route});
  }
}
