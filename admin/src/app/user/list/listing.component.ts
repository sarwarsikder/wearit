import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { Parser } from 'json2csv';

@Component({
  selector: 'user-listing',
  templateUrl: './listing.html'
})
export class UserListingComponent implements OnInit {
  public count: Number = 0;
  public items = [];
  public currentPage: Number = 1;
  public pageSize: Number = 10;
  public searchFields: any = {
  };
  public sortOption = {
    sortBy: 'createdAt',
    sortType: 'desc'
  };
  private userType: string;

  constructor(private router: Router, private userService: UserService, private toasty: ToastyService, private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.setupComponent(params['type']);
      console.log(params);
    })
  }
  setupComponent(someParam) {
    this.userType = someParam;
    this.query();
  }
  ngOnInit() {
    // this.userType = this.route.snapshot.paramMap.get('type');
    // this.query();
  }

  exportUsers() {

    try {
      const myData = [];
      const fields = ['Name', 'Email', 'Active', 'EmailVerified', 'CreatedAt'];
      const opts = { fields };
      
      let params = Object.assign({
        take: this.count,
        role: this.userType
      }, this.searchFields);
      this.userService.search(params)
        .then((resp) => {           
          resp.data.items.forEach((key: any, val: any) => {      
                var date = new Date(key.createdAt);      
                myData.push({ Name: key.name, Email: key.email, Active: key.isActive === true ? "Y" : "N", EmailVerified: key.emailVerified === true ? "Y" : "N", CreatedAt: date.toString()  });
          })

      const parser = new Parser(opts);
      console.log(myData)
      const csv = parser.parse(myData);

      var exportedFilenmae = 'user.csv' || 'export.csv';

      var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, exportedFilenmae);
      } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
          var url = URL.createObjectURL(blob);
          link.setAttribute("href", url);
          link.setAttribute("download", exportedFilenmae);
          link.style.visibility = 'hidden';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }
    })
      .catch(() => alert('Something went wrong, please try again!'));

    } catch (err) {
      console.error('Err', err);
    }
    
  }

  query() {
    let params = Object.assign({
      page: this.currentPage,
      take: this.pageSize,
      sort: `${this.sortOption.sortBy}`,
      sortType: `${this.sortOption.sortType}`,
      role: this.userType
    }, this.searchFields);
    this.userService.search(params)
      .then((resp) => {
        this.count = resp.data.count;
        this.items = resp.data.items;
        this.searchFields.isShop = '';
      })
      .catch(() => alert('Something went wrong, please try again!'));
      
  }

  sortBy(field: string, type: string) {
    this.sortOption.sortBy = field;
    this.sortOption.sortType = type;
    this.query();
  }

  remove(item: any, index: number) {
    if (window.confirm('WARNING - once deleted user, all related data will be deleted too. Are you sure?')) {
      this.userService.delete(item._id)
        .then(() => {
          this.toasty.success('Item has been deleted!');
          this.items.splice(index, 1);
        })
        .catch(() => this.toasty.error('Something went wrong, please try again!'));
    }
  }
}
