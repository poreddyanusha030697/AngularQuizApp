import { Component } from '@angular/core';
import {QuestionService} from '../service/question.service';

@Component({
  selector: 'app-showanswer',
  template: `

  <div class="card">
    <div class=" justify-content-between p-3">
      <ng-container *ngIf="!showAns">
        <div *ngFor="let question of questionList">
          <p><b>Question</b> - <i>{{question.questionText}}</i><br> <b>Answer</b> - <i>{{question.correctAns}}</i> <br> <b>Explanation</b> - <i>{{question.explanation}}</i></p>
        </div>
      </ng-container>
    </div>
  </div>
    
  `,
  styles: [
  ]
})
export class ShowanswerComponent {

  public questionList:any = [];
  public showAns:boolean= false;

  constructor(private questionser: QuestionService){

   
  }
  ngOnInit(){
    this.getQue();
  }

  getQue(){
    this.questionser.getQuestionsJson()
    .subscribe((res:any) =>
      this.questionList =res.questions   
    )      
  }



}
