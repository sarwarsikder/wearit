import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import * as _ from 'lodash';

@Component({
  selector: 'user-update',
  templateUrl: './update.html'
})
export class UserUpdateComponent implements OnInit {
  public info: any = {};
  public avatarUrl = '';
  public isSubmitted = false;
  public avatarOptions: any = {};
  public user: any = {};
  private userId: string;
  public menu = [{name:'Shops', value:'shops'},{name:'Products',value:'products'},{name:'Orders',value:'orders'}]

  constructor(private router: Router, private userService: UserService, private toasty: ToastyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.avatarOptions = {
      url: window.appConfig.apiBaseUrl + '/users/' + this.userId + '/avatar',
      fileFieldName: 'avatar',
      onFinish: resp => this.avatarUrl = resp.data.url
    }

    this.userService.findOne(this.userId).then(resp => {
      this.user = resp.data;
      this.info = _.pick(resp.data, [
        'name', 'email', 'isActive','wholeSeller', 'emailVerified', 'address', 'role', 'emailNotification', 'type', 'phoneNumber','permission'
      ]);
      this.avatarUrl = resp.data.avatarUrl;
    });
  }

  updatePermission(value){
    if(this.info.permission.includes(value)){
      var index = this.info.permission.indexOf(value);
      if (index !== -1) {
        this.info.permission.splice(index, 1);
      }
    }else{
      this.info.permission.push(value)
    }
  }

  submit(frm: any) {
    this.isSubmitted = true;
    if (!frm.valid) {
      return this.toasty.error('Something went wrong, please check and try again!');
    }

    this.userService.update(this.userId, this.info).then(resp => {
      this.toasty.success('Updated successfuly!');
      this.router.navigate(['/users/list']);
    }).catch((err) => this.toasty.error(err.data.data.message || err.data.data.email));
  }
}
