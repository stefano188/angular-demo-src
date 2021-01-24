import { TestBed } from '@angular/core/testing';

import { RxjsOperatorsService } from './rxjs-operators.service';

describe('RxjsOperatorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RxjsOperatorsService = TestBed.get(RxjsOperatorsService);
    expect(service).toBeTruthy();
  });
});
