import { TestBed } from '@angular/core/testing';

import { FocusScrollService } from './focus-scroll.service';

describe('NgxFocusScrollerService', () => {
  let service: FocusScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FocusScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
