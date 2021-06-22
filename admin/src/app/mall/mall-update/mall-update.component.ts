import { Component, OnInit } from '@angular/core';
import { MallService } from '../mall.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-mall-update',
  templateUrl: './mall-update.component.html',
  styleUrls: ['./mall-update.component.css']
})
export class MallUpdateComponent implements OnInit {
  public mall: any;
  public media: any;

  constructor(private router: Router, private route: ActivatedRoute, private mallService: MallService, private toasty: ToastyService) {
  }

  ngOnInit() {
    let mallId = this.route.snapshot.paramMap.get('id');
    this.mallService.findOne(mallId)
      .then(resp => {
        this.mall = resp.data;
        if (resp.data.media) {
          this.media = resp.data.media;
          this.mall.mediaId = resp.data.media._id;
        }
      });
  }

  selectMedia(media: any) {
    this.media = media;
  }

  submit(frm: any) {
    if (!this.mall.title) {
      return this.toasty.error('Please enter mall name');
    }

    if (this.media) {
      this.mall.mediaId = this.media._id;
    } else {
      return this.toasty.error('Please browse mall image');
    }

    this.mallService.update(this.mall._id, this.mall)
      .then(() => {
        this.toasty.success('mall has been updated');
        this.router.navigate(['/malls']);
      }, err => this.toasty.error(err.data.message || 'Something went wrong!'));
  }
}

