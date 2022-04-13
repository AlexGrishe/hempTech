import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-equipment-cards',
  templateUrl: './equipment-cards.component.html',
  styleUrls: ['./equipment-cards.component.scss']
})
export class EquipmentCardsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigate(path: any) {
    this.router.navigate([{outlets: {primary: path, sidemenuequipment: path}}],
      {relativeTo: this.route});
  }

}
