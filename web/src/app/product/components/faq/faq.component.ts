import {Component, Inject, Input, OnInit} from '@angular/core';
import {FaqService} from '../../services/faq.service';
import {AuthService} from '../../../shared/services';
import {Router} from '@angular/router';
import {ToastyService} from "ng2-toasty";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  @Input()
  productId: any = '';

  public questions: any[] = [];

  public searchTimeout: any = null;
  // public questionPerPage = 5;

  public searchStr: string;
  public newQuestionTxt: string;

  // public seeMoreBtn = false;
  public addQuestionBtn = false;
  public postQuestionSection = false;

  constructor(private faqService: FaqService,
              private authService: AuthService,
              private router: Router,
              private toastyService: ToastyService) { }

  ngOnInit(): void {
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
          this.addQuestionBtn = true;
          // if (res.data.count > this.questionPerPage) {
          //   this.seeMoreBtn = true;
          // }
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
      question: this.newQuestionTxt,
      productId: this.productId
    };
    this.faqService.postQuestion(data)
        .then((res) => {
          this.newQuestionTxt = '';
          this.postQuestionSection = false;
          this.toastyService.success('Successfully posted your question');
        })
        .catch(err => this.toastyService.error('Question posting failed'));
  }
}
