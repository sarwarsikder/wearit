import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { CreateService } from '../services/create.service'

interface field {
  label: string;
  type: string | number;
  unit: string;
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  label: string;
  fields: [field] = [{ label: '', type: 'number', unit: '' }];

  constructor(private router: Router, private createService: CreateService, private toasty: ToastyService) { }

  ngOnInit(): void {
  }

  addField() {
    this.fields.push({ label: '', type: 'number', unit: '' })
  }

  submit() {
    const form = {
      label: this.label,
      fields: this.fields
    }
    this.createService.create(form)
      .then(() => {
        this.toasty.success('Form created');
        this.router.navigate(['/starter']);
      }, err => this.toasty.error(err.data.data.details[0].message || err.data.message || 'Something went wrong!'))
  }
}
