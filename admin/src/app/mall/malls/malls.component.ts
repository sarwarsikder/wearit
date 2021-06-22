import { Component, OnInit } from '@angular/core';
import { MallService } from '../mall.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-malls',
  templateUrl: './malls.component.html',
  styleUrls: ['./malls.component.css']
})
export class MallsComponent implements OnInit {
  public items = [];
  public page = 1;
  public total = 0;
  public title: string = '';
  public address: string = '';

  constructor(private router: Router, private mallService: MallService, private toasty: ToastyService) {
  }

  ngOnInit() {
    this.query();
  }

  query() {
    this.mallService.search({
      page: this.page,
      title: this.title,
      address: this.address,
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
    if (window.confirm('Are you sure want to delete this mall?')) {
      this.mallService.remove(item._id)
        .then(() => {
          this.toasty.success('Item has been deleted!');
          this.items.splice(index, 1);
        })
        .catch((err) => this.toasty.error(err.data.message || 'Something went wrong, please try again!'));
    }
  }
}