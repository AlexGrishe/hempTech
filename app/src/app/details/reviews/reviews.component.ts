import { Component, OnInit } from '@angular/core';
import { reviews } from '../../reviews';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  filteredReviews = reviews.slice(0, 4);

  constructor() { }

  ngOnInit(): void {
  }

}
