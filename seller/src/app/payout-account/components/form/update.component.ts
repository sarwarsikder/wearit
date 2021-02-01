import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import * as _ from 'lodash';

@Component({
  selector: 'account-update',
  templateUrl: './form.html'
})
export class AccountUpdateComponent implements OnInit {

  public isSubmitted: boolean = false;
  public account: any;

  constructor(private router: Router, private accountService: AccountService, private route: ActivatedRoute, private toasty: ToastyService) {
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.accountService.findOne(id).then(resp => {
      this.account = resp.data;
    });
  }

  submit(frm) {
    this.isSubmitted = true;
    if (frm.$invalid) {
      this.toasty.error('Invalid form, please try again.');
    }

    if (this.account.type === 'paypal' && this.account.paypalAccount == '') {
      return this.toasty.error('If you select type payout is paypal, please enter Paypal Account');
    } else if (this.account.type === 'bank-account' && this.account.paypalAccount) {
      this.account.paypalAccount = '';
    }

    let param = {
      type: this.account.type,
      paypalAccount: this.account.paypalAccount,
      accountHolderName: this.account.accountHolderName,
      accountNumber: this.account.accountNumber,
      iban: this.account.iban,
      bankName: this.account.bankName,
      bankAddress: this.account.bankAddress,
      sortCode: this.account.sortCode,
      routingNumber: this.account.routingNumber,
      swiftCode: this.account.swiftCode,
      ifscCode: this.account.ifscCode,
      routingCode: this.account.routingCode
    }

    this.accountService.update(this.account._id, param).then(resp => {
      this.toasty.success('Updated successfully.');
    })
  }
}
