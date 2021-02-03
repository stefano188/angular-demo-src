import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAuInputComponent } from './app-au-input.component';

describe('AppComponent', () => {
  let component: AppAuInputComponent;
  let fixture: ComponentFixture<AppAuInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAuInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAuInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
