import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { FocusScrollDirective } from './focus-scroll.directive';

@Injectable({
  providedIn: 'root'
})
export class FocusScrollService {

  public onFlush = new Subject<void>();
  private focusScrollElements: FocusScrollDirective[] = []

  constructor() {

  }

  public addFocusScrollElement(el: FocusScrollDirective) {

    let sameXPos = this.focusScrollElements.filter(f => f.xPos === el.xPos && f !== el);

    let sortedXElements = [
      ...sameXPos.filter(f => f.xPos <= el.xPos && f !== el),
      el,
      ...sameXPos.filter(f => f.xPos > el.xPos && f !== el)  
    ];

    this.focusScrollElements = [
      ...this.focusScrollElements.filter(f => f.yPos <= el.yPos && f !== el && !sortedXElements.includes(f)),
      ...sortedXElements,
      ...this.focusScrollElements.filter(f => f.yPos > el.yPos && f !== el && !sortedXElements.includes(f))
    ];

  }

  public removeFocusScrollElement(el: FocusScrollDirective) {
    
    this.focusScrollElements = [...this.focusScrollElements.filter(f => f !== el)];

  }

  public flush() {
    
    this.focusScrollElements.forEach(f => {
      f.displayError();
    });


    for(let f of this.focusScrollElements) {

      if (!f.isValid()) {
        
        f.focusScrollTo();

        break;

      }

    }

  }

}
