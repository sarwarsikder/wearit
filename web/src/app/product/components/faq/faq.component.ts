import {Component, Inject, Input, OnInit} from '@angular/core';
import {FaqService} from '../../services/faq.service';

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
  private questionPerPage = 5;

  private searchStr: string;
  private showSeeMore = false;
  private showAddQuestion = false;

  constructor(private faqService: FaqService) { }

  ngOnInit(): void {
  }

  searchQuestions(): void {
    const params = {
      productId: this.productId,
      question: this.searchStr,
      page: 1,
      take: this.questionPerPage
    };
    console.log('Searching', this.searchStr);
    this.faqService.search(params)
        .then((res) => {
          this.questions = res.data.items;
          if (res.data.count > this.questionPerPage) {
            this.showSeeMore = true;
          }
          this.showAddQuestion = true;
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
}
