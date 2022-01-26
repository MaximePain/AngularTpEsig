import { TestBed } from '@angular/core/testing';

import { TpguardGuard } from './tpguard.guard';

describe('TpguardGuard', () => {
  let guard: TpguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TpguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
