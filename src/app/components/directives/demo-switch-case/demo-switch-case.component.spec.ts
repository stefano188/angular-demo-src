import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSwitchCaseComponent } from './demo-switch-case.component';

describe('DemoSwitchCaseComponent', () => {
  let component: DemoSwitchCaseComponent;
  let fixture: ComponentFixture<DemoSwitchCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSwitchCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSwitchCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
