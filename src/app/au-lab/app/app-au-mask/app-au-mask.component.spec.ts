import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAuMaskComponent } from './app-au-mask.component';

describe('AppAuMaskComponent', () => {
  let component: AppAuMaskComponent;
  let fixture: ComponentFixture<AppAuMaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAuMaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAuMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
