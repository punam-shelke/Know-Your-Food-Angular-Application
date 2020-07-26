import { TestBed } from '@angular/core/testing';

import { ReceipeDetailGuard } from './receipe-detail.guard';

describe('ReceipeDetailGuard', () => {
  let guard: ReceipeDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ReceipeDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
