import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableCoursesComponent } from './observable-courses.component';

describe('ObservableCoursesComponent', () => {
  let component: ObservableCoursesComponent;
  let fixture: ComponentFixture<ObservableCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
