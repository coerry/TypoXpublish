import { TestBed } from '@angular/core/testing';

import { AuthListenerService } from './auth-listener.service';

describe('AuthListenerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthListenerService = TestBed.get(AuthListenerService);
    expect(service).toBeTruthy();
  });
});
