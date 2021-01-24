import { Injectable } from '@angular/core';
import { combineLatest, empty, fromEvent, interval, merge, of, Subject, timer } from 'rxjs';
import { concatMap, delay, filter, map, mapTo, mergeMap, scan, startWith, switchMap, takeUntil, takeWhile, tap, withLatestFrom } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class RxjsOperatorsService {

  constructor() { }

  timerSample() {
    timer(2500).subscribe((x) => console.log(`A timer(2500) ${x}`));     // emits 0 after 2500 msec and stop
    timer(3000, 2000).subscribe((x) => console.log(`B (3000,2000) ${x}`));    // emits subsequent values every 2sec after 3sec
    timer().subscribe((x) => console.log(`C timer() ${x}`));     // emits immediately 0 and stop

  }

  scanOperator() {

    // scan RxJS op
    const source = of(1,2,3);
    const sample = source.pipe(
      scan((acc, curr) => {
        console.log(`before .... acc ${acc} -- curr ${curr}`);
        return acc + curr;
      }, 0)
    );
    sample.subscribe(val => console.log(`acc ${val}`));



    const subject = new Subject();
    //scan example building an object over time
    const example = subject.pipe(
      scan((acc, curr) => {
        console.log(`before .. acc`, acc);
        console.log(`before .. curr`, curr);
        return Object.assign({}, acc, curr);
      }, {})
    );
    //log accumulated values
    example.subscribe(val =>
      console.log('Accumulated object:', val)
    );
    //next values into subject, adding properties to object
    // {name: 'Joe'}
    subject.next({ name: 'Joe' });
    // {name: 'Joe', age: 30}
    subject.next({ age: 30 });
    // {name: 'Joe', age: 30, favoriteLanguage: 'JavaScript'}
    subject.next({ favoriteLanguage: 'JavaScript' });

  }

  mergeSample() {
    const first = interval(2500);
    const second = interval(2000);
    const third = interval(1500);
    const fourth = interval(1000);

    //emit outputs from one observable
    const example = merge(
      first.pipe(mapTo('FIRST!')),
      second.pipe(mapTo('SECOND!')),
      third.pipe(mapTo('THIRD')),
      fourth.pipe(mapTo('FOURTH'))
    );
    // const example = merge(
    //   first,
    //   second,
    //   third,
    //   fourth
    // );
    //output: "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"
    const subscribe = example.subscribe(val => console.log(val));
  }

  mergeMapSample() {
    // faking network request for save
    const saveLocation = location => {
      return of(location).pipe(delay(500));
    };
    // streams
    const click$ = fromEvent(document, 'click');

    click$
      .pipe(
        mergeMap((e: MouseEvent) => {
        // switchMap((e: MouseEvent) => {
        // concatMap((e: MouseEvent) => {
          return saveLocation({
            x: e.clientX,
            y: e.clientY,
            timestamp: Date.now()
          });
        })
      )
      // Saved! {x: 98, y: 170, ...}
      .subscribe(r => console.log('Saved!', r));
  }

  switchMapSample() {
    // const hello$ = of('Hello');
    // const world$ = of('World');
    const hello$ = timer(3000).pipe(mapTo('Hello'));
    const world$ = of('World').pipe(delay(500));

    hello$.pipe(
      startWith('forcing start observable'),
      switchMap(param => {
        console.log(`before switchMap emits ${param}`);
        return world$;
      })
    ).subscribe(val => console.log('after switchMap emits ', val));

  }

  ajaxSample() {
    return ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      method: 'GET',
      headers: {

      },
      body: {
        
      }
    }).subscribe(response => console.log(response));
  }

  withLatestFromSample() {
    //emit every 5s
    const source = interval(5000);
    //emit every 1s
    const secondSource = interval(2000);
    const example = source.pipe(
      tap((val) => console.log(`source val ${val}`)),
      withLatestFrom(secondSource),
      map(([first, second]) => {
        return `First Source (5s): ${first} Second Source (1s): ${second}`;
      })
    );
    const subscribe = example.subscribe(val => console.log(val));
  }

  combineLatestSample() {
    const hello$ = timer(5000, 5000);//.pipe(mapTo('Hello'));
    const world$ = timer(10000, 10000);//.pipe(mapTo('World'));
    
    // combineLatest(hello$, world$)
    //   .subscribe(val => console.log(`combineLatest ${val}`)); // emit after 3 secs

    // combineLatest(hello$, world$)
    //   .pipe(
    //     startWith('Start')
    //   )
    //   .subscribe(val => {
    //     console.log(`combineLatest ${val}`);
    //     console.log('-----------');
    //   }); 

    hello$.subscribe(val => console.log(`hello$ ${val}`));
    world$.subscribe(val => console.log(`world$ ${val}`));
    
  }

}
