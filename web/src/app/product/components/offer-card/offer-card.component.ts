import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'offer-card',
  templateUrl: './offer-card.component.html',
})
export class OfferCardComponent implements OnInit {
  @Input() offer: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
