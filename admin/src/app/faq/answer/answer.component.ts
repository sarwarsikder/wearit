import { Component, OnInit } from '@angular/core';
import {FaqService} from '../faq.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  private question: any = {};
  private answer = '';

  private questionId: any;

  constructor(private route: ActivatedRoute,
              private faqService: FaqService) { }

  ngOnInit(): void {
    this.questionId = this.route.snapshot.params.id;
    this.loadQuestion();
  }

  loadQuestion(): void {
    this.faqService.single(this.questionId)
        .then(
            res => {
              this.question = res.data;
              this.answer = this.question.answer;
            }
        )
        .catch(err => console.log(err));
  }


  updateAnswer() {
    this.faqService.updateAnswer(this.answer, this.question);
  }
}
