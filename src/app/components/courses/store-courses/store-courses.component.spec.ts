import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreCoursesComponent } from './store-courses.component';

describe('StoreCoursesComponent', () => {
  let component: StoreCoursesComponent;
  let fixture: ComponentFixture<StoreCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
