import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoChangePasswordComponent } from './demo-change-password.component';

describe('DemoChangePasswordComponent', () => {
  let component: DemoChangePasswordComponent;
  let fixture: ComponentFixture<DemoChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoChangePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
