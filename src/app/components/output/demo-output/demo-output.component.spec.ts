import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoOutputComponent } from './demo-output.component';

describe('DemoOutputComponent', () => {
  let component: DemoOutputComponent;
  let fixture: ComponentFixture<DemoOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
