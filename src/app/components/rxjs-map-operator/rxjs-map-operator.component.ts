import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, empty, fromEvent, interval, merge, Observable, of, Subject, Subscription, timer } from 'rxjs';
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent';
import { filter, map, mapTo, mergeMap, scan, startWith, switchMap, takeUntil, takeWhile, tap } from 'rxjs/operators';
import { RxjsOperatorsService } from 'src/app/services/rxjs-operators.service';

@Component({
  selector: 'rxjs-map-operator',
  templateUrl: './rxjs-map-operator.component.html',
  styleUrls: ['./rxjs-map-operator.component.css']
})
export class RxjsMapOperatorComponent implements OnInit, AfterViewInit {

  @ViewChild('btn1', {read: ElementRef, static: false}) btn1: ElementRef<any>;
  @ViewChild('btn2', {read: ElementRef, static: false}) btn2: ElementRef<any>;

  // subscrBtn1: Subscription;
  // subscrBtn2: Subscription;
  // subscrBtn3: Subscription;

  obsBtn1$: Observable<any>;
  obsBtn2$: Observable<any>;

  private counterX = (x: number = 1000) => interval(x);
  
  constructor(private rxjsOpService: RxjsOperatorsService) { }

  ngOnInit() {
    console.log('ngOnInit btn elementRef', this.btn1); // undefined

    // timer
    // this.rxjsOpService.timerSample();
  
    // scan RxJS op
    // this.rxjsOpService.scanOperator();

    // merge
    // this.rxjsOpService.mergeSample();

    // this.rxjsOpService.mergeMapSample();

    // this.rxjsOpService.switchMapSample();

    // this.rxjsOpService.ajaxSample();
    
    // this.rxjsOpService.withLatestFromSample();

    // this.rxjsOpService.combineLatestSample();
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit btn elementRef', this.btn1); // first moment for elements queried via @ViewChild

    // this.switchMapCountdownSample();

    // for every click a new subscription will be created and will overlap the previous active subscriptions
    // causing confusing and potencially memory leaks
    // no way to unsubscribe to previous subscription
    // also there are nested subscriptions
    /* fromEvent(this.btn.nativeElement, 'click')
      .subscribe((event) => {
        console.log(event);
        counter.subscribe(x => console.log(x));
      }); */


    // with switchMap when the new subscription is active the previous one will unsubscribe
    // here for every click the observable will not subscribe to click but will switch to the new counter observable.
    // for every click the counter will be reset to 0 because it is a new subscription
    // this.subscrBtn1 = fromEvent(this.btn1.nativeElement, 'click')
    //   .pipe(
    //     switchMap(() => counter)
    //   )
    //   .subscribe(x => console.log(x));

    

  }
  
  isCountDownStarted = false;
  timer$: Observable<any>;

  switchMapCountdownSample() {
    if (this.isCountDownStarted) return;

    this.isCountDownStarted = true;
    const COUNTDOWN_SECONDS = 10;
  
  // elem refs
    const remainingLabel = document.getElementById('remaining');
    const pauseButton = document.getElementById('pause');
    const resumeButton = document.getElementById('resume');

    // streams
    const interval$ = interval(1000).pipe(mapTo(-1));
    const pause$ = fromEvent(pauseButton, 'click').pipe(mapTo(false));
    const resume$ = fromEvent(resumeButton, 'click').pipe(mapTo(true));

    this.timer$ = merge(pause$, resume$)
      .pipe(
        startWith(true),
        switchMap(val => { 
          console.log(`switchMap val ${val}`);
          return (val ? interval$ : empty())  // empty() completes the observable
        }),
        scan((acc, curr) => { 
          console.log(`scan curr ${curr}`);
          console.log(`scan acc ${acc}`);
          return (curr ? curr + acc : acc) 
        }, COUNTDOWN_SECONDS),
        takeWhile(v => v >= 0)
      );
      // .subscribe((val: any) => (remainingLabel.innerHTML = val));
  }
  

  generateBtn1(): Observable<any> {
    return this.counterX(1000);
  }

  generateBtn2(): Observable<any> {
    return this.counterX(500);
  }

  
  startAllObservables() {
    this.obsBtn1$ = this.generateBtn1();
    this.obsBtn2$ = this.generateBtn2();
  }
 
  startObs1() {
    this.startAllObservables();

    this.obsBtn2$ = this.obsBtn2$
      .pipe(
        // takeUntil(timer())
        switchMap(() => empty()) 
        );
  }

  startObs2() {
    this.startAllObservables();

    this.obsBtn1$ = this.obsBtn1$
      .pipe(
        // takeUntil(timer())
        switchMap(() => empty()) 
        );
  }

  swMap$: Observable<any>;
  swMapValue: number;
  swMapValueSwitched: number;
  
  startSwMp() {
    this.swMap$ = interval(1000);
    this.swMap$
      .subscribe(val => this.swMapValue = val);
  }

  switchTo() {
    this.swMap$
      .pipe(
        switchMap(() => interval(2000))
      )
      .subscribe(val => this.swMapValueSwitched = val);
  }

  isStarted() {
    return this.swMap$ != null;
  }
}
