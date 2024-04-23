import { TestBed } from '@angular/core/testing';

import { BetterMathsService } from './better-maths.service';

describe('BetterMathsService', () => {
  let service: BetterMathsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BetterMathsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
