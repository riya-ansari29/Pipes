import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTweet]'
})
export class TweetDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = "white"
    el.nativeElement.style.background ="red"
  }

}
