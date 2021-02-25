import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brand-card',
  templateUrl: './brand-card.component.html',
})
export class BrandCardComponent implements OnInit {
  @Input() brand: any = {};



  constructor() { }

  ngOnInit() {
    if (this.brand) {
     
    }
  }
}
