import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appProgressColor]'
})
export class ProgressColorDirective {

  constructor(private el: ElementRef) {
    
    this.el.nativeElement.style.backgroundColor = 'yellow';

   }

}
