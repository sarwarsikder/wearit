import { Component, OnInit } from '@angular/core';
import {FaqService} from '../faq.service';
import {ToastyService} from 'ng2-toasty';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public questions: any[] = [];
  public searchStr = '';

  public page = 1;
  public take = 10;
  public total = 0;

  constructor(private faqService: FaqService, private toastyService: ToastyService) { }

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
              this.total = res.data.count;
            }
        )
        .catch(err => console.log(err));
  }

  remove(questionId: any, i: number) {
    this.faqService.remove(questionId)
        .then(res => {
          this.questions.splice(i, 1);
          this.toastyService.success('Question deleted successfully');
        })
        .catch(err => this.toastyService.error('Error on deleting question'));
  }
}
