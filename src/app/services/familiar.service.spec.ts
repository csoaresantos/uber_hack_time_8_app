import { TestBed } from '@angular/core/testing';

import { FamiliarService } from './familiar.service';

describe('FamiliarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FamiliarService = TestBed.get(FamiliarService);
    expect(service).toBeTruthy();
  });
});
