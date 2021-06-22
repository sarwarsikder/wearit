import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { OfferService } from './offer.service';

@Component({
  templateUrl: './offers.html'
})
export class OfferComponent implements OnInit {

  public items = [];
  public page = 1;
  public total = 0;
  public title: string = '';

  constructor(private router: Router, private offerService: OfferService, private toasty: ToastyService) {
  }

  ngOnInit() {
    this.query();
  }

  query() {
    this.offerService.search({
      page: this.page,
      title: this.title
    })
      .then(resp => {
        this.items = resp.data.items;
        this.total = resp.data.count;
      })
      .catch(() => alert('Something went wrong, please try again!'));
  }

  keyPress(event: any) {
    if (event.charCode === 13) {
      this.query();
    }
  }

  remove(item: any, index: number) {
    if (window.confirm('Are you sure want to delete this offer?')) {
      this.offerService.remove(item._id)
        .then(() => {
          this.toasty.success('Item has been deleted!');
          this.items.splice(index, 1);
        })
        .catch((err) => this.toasty.error(err.data.message || 'Something went wrong, please try again!'));
    }
  }
}

@Component({
  templateUrl: './form.html'
})
export class OfferCreateComponent implements OnInit {
  public offer: any = {
    name: '',
    alias: '',
    description: '',
    settings: {},
    position: 'default'
  };
  public media: any;

  constructor(private router: Router, private offerService: OfferService, private toasty: ToastyService) {
  }

  ngOnInit() { }

  selectMedia(media: any) {
    this.media = media;
  }

  submit(frm: any) {
    if (!this.offer.title) {
      return this.toasty.error('Please enter offer name');
    }

    if (this.media) {
      this.offer.mediaId = this.media._id;
    } else {
      return this.toasty.error('Please browse offer image');
    }

    this.offerService.create(this.offer)
      .then(() => {
        this.toasty.success('Offer has been created');
        this.router.navigate(['/offers']);
      }, err => this.toasty.error(err.data.message || 'Something went wrong!'));
  }
}

@Component({
  templateUrl: './form.html'
})
export class OfferUpdateComponent implements OnInit {
  public offer: any;
  public media: any;

  constructor(private router: Router, private route: ActivatedRoute, private offerService: OfferService, private toasty: ToastyService) {
  }

  ngOnInit() {
    let offerId = this.route.snapshot.paramMap.get('id');
    this.offerService.findOne(offerId)
      .then(resp => {
        this.offer = resp.data;
        if (resp.data.media) {
          this.media = resp.data.media;
          this.offer.mediaId = resp.data.media._id;
        }
      });
  }

  selectMedia(media: any) {
    this.media = media;
  }

  submit(frm: any) {
    if (!this.offer.title) {
      return this.toasty.error('Please enter offer name');
    }

    if (this.media) {
      this.offer.mediaId = this.media._id;
    } else {
      return this.toasty.error('Please browse offer image');
    }

    this.offerService.update(this.offer._id, this.offer)
      .then(() => {
        this.toasty.success('offer has been updated');
        this.router.navigate(['/offers']);
      }, err => this.toasty.error(err.data.message || 'Something went wrong!'));
  }
}
