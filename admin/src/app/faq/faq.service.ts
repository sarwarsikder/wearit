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
    const headers = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDQwNzhjZDdkNDc2ZTAwMTQ5NGJhZjQiLCJyb2xlIjoidXNlciIsImlhdCI6MTYyMDM2ODk0MiwiZXhwIjoxNjIwOTczNzQyfQ.NDdE8rWEf4hLTf-OnD-ae1YuuRgHSvHX4dTKqvfC4o8'
      }
    };

    const data = {
      id: question.id,
      answer: answer,
      question: question.question,
      visibility: true
    };
    return this.rest.all('questions/' + question.id).doPUT(data);
  }
}
