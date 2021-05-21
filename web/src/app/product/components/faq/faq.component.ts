import {Component, Inject, Input, OnInit} from '@angular/core';
import {FaqService} from '../../services/faq.service';
import {AuthService} from "../../../shared/services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  @Input()
  productId: any = '';

  private questions: any[] = [];

  private searchTimeout: any = null;
  // private questionPerPage = 5;

  private searchStr: string;
  private newQuestionTxt: string;

  // private seeMoreBtn = false;
  private addQuestionBtn = false;
  private postQuestionSection = false;

  constructor(private faqService: FaqService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    console.log(this.productId)
  }

  searchQuestions(): void {
    const params = {
      productId: this.productId,
      question: this.searchStr,
      visibility: true,
      // page: 1,
      // take: this.questionPerPage
    };
    // console.log('Searching', this.searchStr);
    this.faqService.search(params)
        .then((res) => {
          this.questions = res.data.items;
          // if (res.data.count > this.questionPerPage) {
          //   this.seeMoreBtn = true;
          // }
          this.addQuestionBtn = true;
        })
        .catch(err => console.log(err));
  }

  doDelayedSearch(delay: number = 1000): void {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.searchQuestions();
    }, delay);
  }

  showPostQuestionSection(): void {
    if (this.authService.isLoggedin()) {
      this.searchStr = '';
      this.postQuestionSection = true;
    } else {
      sessionStorage.setItem('redirectUrl', this.router.url);
      this.router.navigate(['/auth/login']);
    }
  }


  postNewQuestion(): void {
    const data = {
      question: this.newQuestionTxt + this.productId
    };
    this.faqService.postQuestion(data)
        .then((res) => {
          this.newQuestionTxt = '';
          this.postQuestionSection = false;
        })
        .catch(err => console.log(err));
  }
}
