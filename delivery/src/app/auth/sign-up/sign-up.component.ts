import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  files: File[] = [];
  pictures: File[] = [];

	onSelect(event, type) {
		//console.log(event);
    if(type == 'file')
    {
		  this.files.push(...event.addedFiles);
    }
    else{
      this.pictures.push(...event.addedFiles);
    }
	}

	onRemove(event, type) {
		//console.log(event);
		
    if(type == 'file')
    {
		  this.files.splice(this.files.indexOf(event), 1);
    }
    else{
      this.pictures.splice(this.pictures.indexOf(event), 1);
    }
	}

}
