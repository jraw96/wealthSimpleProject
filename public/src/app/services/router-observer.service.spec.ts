import { TestBed, inject } from '@angular/core/testing';

import { RouterObserverService } from './router-observer.service';

describe('RouterObserverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouterObserverService]
    });
  });

  it('should be created', inject([RouterObserverService], (service: RouterObserverService) => {
    expect(service).toBeTruthy();
  }));
});
