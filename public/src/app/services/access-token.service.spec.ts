import { TestBed, inject } from '@angular/core/testing';

import { AccessTokenService } from './access-token.service';

describe('AccessTokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessTokenService]
    });
  });

  it('should be created', inject([AccessTokenService], (service: AccessTokenService) => {
    expect(service).toBeTruthy();
  }));
});
