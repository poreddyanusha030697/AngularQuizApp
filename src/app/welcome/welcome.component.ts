import { Component, OnInit,ViewChild,ElementRef} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  @ViewChild('userName') userName!:ElementRef;
  inputValue:string='';


  constructor(){}
  ngOnInit(){}
  onInputChange(){}

  startQuiz(){
    localStorage.setItem("userName",this.userName.nativeElement.value);  }

    
 




  


}
