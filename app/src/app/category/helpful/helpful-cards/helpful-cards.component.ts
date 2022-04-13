import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-helpful-cards',
  templateUrl: './helpful-cards.component.html',
  styleUrls: ['./helpful-cards.component.scss']
})
export class HelpfulCardsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigate(path: any) {
    this.router.navigate([{outlets: {primary: path, sidemenuhelpful: path}}],
      {relativeTo: this.route});
  }
}
