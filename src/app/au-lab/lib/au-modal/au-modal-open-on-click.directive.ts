import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuModalService } from './modal.service';

@Directive({
  selector: '[auModalOpenOnClick]'
})
export class AuModalOpenOnClickDirective implements OnInit, OnDestroy {

  elements: HTMLBaseElement[];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private modalService: AuModalService
  ) { }

  ngOnInit() {
    this.modalService.close$
      .subscribe(() => this.viewContainer.clear()); // close the popup
  }

  ngOnDestroy() {
    this.elements.forEach(el => {
      el.removeEventListener('click', this.clickHandler);
    });
  }

  @Input()
  set auModalOpenOnClick(els) {    

    if (els.length) {
      this.elements = els;
    } else {
      this.elements = [els];
    }

    this.elements.forEach(el => {
      el.addEventListener('click', this.clickHandler );
    });

  }

  // wrapping the function as it was inline function
  // () => { ... }
  clickHandler = (() => {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef); // open the popup
  }).bind(this);

  // because this function is referred inside a foreach function
  // the 'this' keyword in this case doesn't point to this class but it referes the window global reference
  // clickHandler() {
  //   console.log(this); // 'this' is poinint to the clicked button
  //   console.log(this.viewContainer);
  //   this.viewContainer.clear(); // this.viewContainer is undefined
  //   this.viewContainer.createEmbeddedView(this.templateRef); // open the popup
  // }

}
