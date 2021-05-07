import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";


const routes: Routes = [
  {
    path: '',
    component: QuestionComponent,
    data: {
      title: 'Manage FAQs',
      urls: [{ title: 'FAQs', url: '/faqs' }, { title: 'Questions' }],
    },
  },
  {
    path: 'answer/:id',
    component: AnswerComponent,
    data: {
      title: 'Answer FAQ',
      urls: [
        { title: 'Answer FAQ', url: '/faqs' },
        { title: 'Answer' },
      ],
    },
  },
];


@NgModule({
  declarations: [QuestionComponent, AnswerComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgbModule,
        FormsModule
    ]
})
export class FaqModule { }
