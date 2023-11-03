import { style } from '@angular/animations';
import { Directive,Input,ElementRef,Renderer2, HostListener} from '@angular/core';

@Directive({
  selector: '[appBgChange]'
})
export class BgChangeDirective {

  @Input() iscorrect : boolean = false;

  constructor(private el: ElementRef, private render:Renderer2) { }

  @HostListener('click') answer(){
    if(this.iscorrect == true){
      this.render.setStyle(this.el.nativeElement,'background','green');
      this.render.setStyle(this.el.nativeElement,'color','white');
      this.render.setStyle(this.el.nativeElement,'border','2px solid grey');

    }else{
      this.render.setStyle(this.el.nativeElement,'background','red');
      this.render.setStyle(this.el.nativeElement,'color','white');
      this.render.setStyle(this.el.nativeElement,'border','2px solid grey');


    }

  }

}
