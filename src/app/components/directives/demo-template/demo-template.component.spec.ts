import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTemplateComponent } from './demo-template.component';

describe('DemoTemplateComponent', () => {
  let component: DemoTemplateComponent;
  let fixture: ComponentFixture<DemoTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
