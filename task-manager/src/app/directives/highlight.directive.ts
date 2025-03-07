import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightCompleted]'
})
export class HighlightDirective implements OnInit {

  @Input() appHighlightCompleted: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.updateHighlight();
  }

  private updateHighlight() {
    this.el.nativeElement.style.backgroundColor = this.appHighlightCompleted ? 'lightgreen' : 'lightcoral';
    this.el.nativeElement.style.color = 'white';
    this.el.nativeElement.style.padding = '5px';
    this.el.nativeElement.style.borderRadius = '5px';
  }



}
