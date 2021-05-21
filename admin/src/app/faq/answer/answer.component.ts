import { Component, OnInit } from '@angular/core';
import {FaqService} from '../faq.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastyService} from "ng2-toasty";

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
              private router: Router,
              private faqService: FaqService,
              private toastyService: ToastyService) { }

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
    this.faqService.updateAnswer(this.answer, this.question)
        .then(res => {
          this.toastyService.success('Answer updated successfully');
          this.router.navigate(['/faqs'])
        })
        .catch(err => this.toastyService.error('Error on updating answer'));
  }
}
