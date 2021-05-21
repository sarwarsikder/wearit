import { Component, OnInit } from '@angular/core';
import {FaqService} from '../faq.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public questions: any[] = [];
  public searchStr = '';

  public page = 1;
  public take = 5;

  constructor(private faqService: FaqService) { }

  ngOnInit(): void {
    this.loadQuestion();
  }

  loadQuestion(): void {
    const params = {
      question: this.searchStr,
      page: this.page,
      take: this.take
    };
    this.faqService.search(params)
        .then(
            res => {
              this.questions = res.data.items;
            }
        )
        .catch(err => console.log(err));
  }

  remove(question: any, i: number) {
    console.log('Remove not implemented yet')
  }
}
