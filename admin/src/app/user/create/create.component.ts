import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'user-create',
  templateUrl: './create.html'
})
export class UserCreateComponent implements OnInit {
  public info: any = {
    type: 'user',
    username: '',
    password: '',
    name: '',
    email: '',
    address: '',
    role: 'user',
    permission: [],
    emailVerified: true,
    isActive: true,
    wholeSeller: true,
  };
  public isSubmitted: any = false;

  public menu = []

  constructor(private router: Router, private userService: UserService, private toasty: ToastyService) {
    this.menu = this.userService.menuList;
    this.info.permission = this.userService.menuValue;
  }

  ngOnInit() { }

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
    if(this.info.role==='admin'){
      frm.value.permission=this.info.permission;
    }
    

    this.isSubmitted = true;
    if (!frm.valid) {
      return this.toasty.error('Something went wrong, please check and try again!');
    }

    this.userService.create(frm.value)
      .then((resp) => {
        this.toasty.success('Created successfully!');
        this.router.navigate(['/users/update/' + resp.data._id]);
      })
      .catch((err) => {
        if (err.data.code === 11000) {
          return this.toasty.error('Email ID already exist.');
        }
        this.toasty.error(err.data.message || err.data.data.message || err.data.data.email);
      });
  }
}
