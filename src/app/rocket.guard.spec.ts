import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { rocketGuard } from './rocket.guard';

describe('rocketGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => rocketGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
