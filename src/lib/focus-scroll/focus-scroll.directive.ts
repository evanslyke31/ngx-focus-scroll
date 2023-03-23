import { Directive, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { FocusScrollService } from './focus-scroll.service';
import { BooleanInput, coerceBooleanProperty } from './focusScrollHelper';

@Directive({
  selector: '[focusScroll]',
  host: {
    '[style.background-color]': '',
  }
})
export class FocusScrollDirective implements OnInit {

  @Input() focusScroll: boolean = false;

  @Input()
  get showError(): boolean {
    return this._showError;
  }
  set showError(showError: BooleanInput) {
    this._showError = coerceBooleanProperty(showError);
  }

  @HostBinding('style.background-color')
  backgroundColor:string = '';

  private _showError = false;

  constructor(private el: ElementRef, private service: FocusScrollService) {
    
  }

  ngOnInit(): void {
    console.log(this.showError)
    this.service.addFocusScrollElement(this);

  }

  private get htmlElement(): HTMLElement {
    return this.el.nativeElement as HTMLElement;
  }

  public isValid() {
    return !this.focusScroll;
  }

  public xPos() {
    return this.htmlElement.getBoundingClientRect().x;
  }

  public yPos() {
    return this.htmlElement.getBoundingClientRect().y;
  }

  private focus() {
    this.htmlElement.focus();
  }

  private scrollTo() {
    this.htmlElement.scrollIntoView({ behavior: "smooth", block: 'center', inline: "nearest" });
  }

  public focusScrollTo() {
    
    this.focus();
    this.scrollTo();

  }

  public displayError() {
    console.log('test');
    if (this._showError) {
      this.backgroundColor = 'red'
    }

  }



}
