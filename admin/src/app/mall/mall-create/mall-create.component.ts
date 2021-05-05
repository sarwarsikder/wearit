import { Component, OnInit } from '@angular/core';
import { MallService } from '../mall.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-mall-create',
  templateUrl: './mall-create.component.html',
  styleUrls: ['./mall-create.component.css']
})
export class MallCreateComponent implements OnInit {
  public mall: any = {
    title: '',
    // alias: '',
    description: '',
    // settings: {},
    // position: 'default',
    address: '',
    mediaId: null,
  };
  public media: any;

  constructor(private router: Router, private mallService: MallService, private toasty: ToastyService) {
  }

  ngOnInit() { }

  selectMedia(media: any) {
    this.media = media;
  }

  submit(frm: any) {
    if (!this.mall.title) {
      return this.toasty.error('Please enter mall title');
    }

    if (this.media) {
      this.mall.mediaId = this.media._id;
    } else {
      return this.toasty.error('Please browse mall image');
    }

    this.mallService.create(this.mall)
      .then(() => {
        this.toasty.success('Mall has been created');
        this.router.navigate(['/malls']);
      }, err => this.toasty.error(err.data.message || 'Something went wrong!'));
  }
}