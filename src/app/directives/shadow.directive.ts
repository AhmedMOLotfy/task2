import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {

  @HostListener('mouseover') mouseOver(){
    this.ele.nativeElement.style.boxShadow = "3px 5px 5px black"
  }

  @HostListener('mouseout') mouseout(){
    this.ele.nativeElement.style.boxShadow = "none"
  }

  constructor(private ele: ElementRef) { }

}
