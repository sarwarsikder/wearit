import { Injectable } from '@angular/core';
import {Restangular} from 'ngx-restangular';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private rest: Restangular) { }

  search(params: any): Promise<any> {
    return this.rest.all('questions').customGET('', params).toPromise();
  }

  single(questionId: any): Promise<any> {
    return this.rest.one('questions', questionId).get().toPromise();
  }

  updateAnswer(answer: any, question: any) {
    const data = {
      answer: answer,
      // visibility: true,
      question: question.question
    };
    return this.rest.one('questions', question.id).customPUT(data).toPromise();
  }

  remove(questionId: any) {
    return this.rest.all('questions').customDELETE(questionId).toPromise();
  }
}
