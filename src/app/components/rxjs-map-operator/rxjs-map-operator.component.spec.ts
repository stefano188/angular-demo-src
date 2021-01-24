import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsMapOperatorComponent } from './rxjs-map-operator.component';

describe('RxjsMapOperatorComponent', () => {
  let component: RxjsMapOperatorComponent;
  let fixture: ComponentFixture<RxjsMapOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsMapOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsMapOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
