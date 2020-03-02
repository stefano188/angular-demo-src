import { TestBed } from '@angular/core/testing';

import { DemoHttpService } from './demo-http.service';

describe('DemoHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemoHttpService = TestBed.get(DemoHttpService);
    expect(service).toBeTruthy();
  });
});
