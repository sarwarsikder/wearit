import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mall-card',
  templateUrl: './mall-card.html'
})
export class MallCardComponent implements OnInit {
  @Input() shop: any;
  constructor(public router: Router){ }

  ngOnInit() {
  }

  goShopPage(mallId)
  {
    this.router.navigate(['/shops/search/'+mallId], {skipLocationChange: true });
  }
}
