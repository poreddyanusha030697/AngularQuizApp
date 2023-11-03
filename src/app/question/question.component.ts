import { Component, Input} from '@angular/core';
import {QuestionService} from '../service/question.service';
import { interval} from 'rxjs';



@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {

  public user:string="";
  public queList:any = [];
  public currentQue: number =0;
  public score:number = 0;
  public count:number = 60;
  public correctAns:number = 0;
  public incorrectAns:number = 0;
  public isQuizComplete:boolean=false;
  interval$:any;
 

  constructor(private questionservice : QuestionService){}
  ngOnInit(){
    this.user = localStorage.getItem("userName")!;
    this.getAllQuestions();
    this.starttimer();
    
  }
  getAllQuestions(){
    this.questionservice.getQuestionsJson()
    .subscribe((res:any) =>
      this.queList =res.questions
    )  
    } 
  nextQuestion(){
    this.currentQue++ ;
  }
  previousQuestion(){
    this.currentQue-- ;
  }
  refresh(){
    this.currentQue = 0;
    this.resettimer();
    this.score = 0;
    this.count=60;
  }
  answer(currentQue:number, myoption:any){

    if(currentQue==this.queList.length){
      this.isQuizComplete = true;
      this.stoptimer();
    }else{
    if(myoption.correct){
      this.score += 10;
      this.correctAns++;
      setTimeout(() =>{ 
        this.currentQue++;
        this.resettimer();
      },1000)
      
    }
    else{
      this.score -=10;
      this.incorrectAns++;
      setTimeout(() =>{  
        this.currentQue++;
        this.resettimer();
      },1000)
    }
  }
  }
  starttimer(){
    this.interval$ = interval(1000)
    .subscribe(val =>{
      this.count--;
      if(this.count==0){
        this.currentQue++;
        this.count = 60;

      }
    })
    setTimeout(() =>{
      this.interval$.unsubscribe();
    },600000)
  }
  stoptimer(){
    this.interval$.unsubscribe(); 
    this.count=60;
  }
  resettimer(){
    this.stoptimer();
    this.count=60;
    this.starttimer();
  }





  }

